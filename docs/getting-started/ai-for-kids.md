Below is a complete Markdown guide that explains how to set up a secure VPS and install n8n as a self-hosted service using Docker. You can copy this document and use it as your installation guide.

---

```markdown
# Self-Hosting n8n: A Comprehensive Guide

This guide will walk you through setting up a secure Virtual Private Server (VPS) and installing [n8n](https://n8n.io) as a self-hosted automation tool using Docker.

---

## Table of Contents

1. [General VPS Setup and Security](#general-vps-setup-and-security)
2. [Installing Docker and Docker Compose](#installing-docker-and-docker-compose)
3. [Installing and Running n8n](#installing-and-running-n8n)
    - [Option 1: Using Docker CLI](#option-1-using-docker-cli)
    - [Option 2: Using Docker Compose](#option-2-using-docker-compose)
4. [Setting Up a Reverse Proxy (Optional)](#setting-up-a-reverse-proxy-optional)
5. [Post-Installation Security and Maintenance](#post-installation-security-and-maintenance)
6. [Conclusion](#conclusion)

---

## General VPS Setup and Security

Before installing n8n, it’s important to secure your VPS. The following steps assume you are using an Ubuntu-based server.

### Step 0: Login and Initial Update
- **Login as root:**  
  ```bash
  ssh root@<vps_hostname>
  ```
- **Update system packages:**
  ```bash
  apt update && apt upgrade -y
  ```
  > **Note:** If a kernel upgrade occurs, reboot via your VPS dashboard and run the update again.

### Step 1: Reset the Root Password
```bash
passwd
```

### Step 2: Create a New User
```bash
adduser <nonroot_user>
```

### Step 3: Add the User to the Sudo Group
```bash
usermod -aG sudo <nonroot_user>
```

### Step 4: Verify User Groups
```bash
groups <nonroot_user>
```
*Expected output should list `sudo` among the groups.*

### Step 5: Configure SSH Key-Based Authentication

1. **Generate an SSH Key on your local machine:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. **Copy the Public Key:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
3. **On the VPS (for both root and the new user):**
   ```bash
   mkdir -p ~/.ssh
   nano ~/.ssh/authorized_keys
   ```
   Paste your public key, then save and exit.

### Step 6: Disable Password and Root Login Over SSH

1. **Edit the SSH configuration file:**
   ```bash
   sudo nano /etc/ssh/sshd_config
   ```
   - Change `PasswordAuthentication yes` to `PasswordAuthentication no`.
   - Change `PermitRootLogin yes` to `PermitRootLogin no` (or `prohibit-password`).
   - Ensure `PubkeyAuthentication yes` is enabled.
2. **Restart SSH:**
   ```bash
   sudo systemctl restart ssh
   ```
3. **Verify the SSH service is running:**
   ```bash
   sudo systemctl status ssh
   ```

### Step 7: Set Up a Firewall (Using UFW)
1. **Install UFW:**
   ```bash
   sudo apt install ufw -y
   ```
2. **Allow SSH (port 22) and enable UFW:**
   ```bash
   sudo ufw allow 22
   sudo ufw enable
   ```
3. **Check the firewall status:**
   ```bash
   sudo ufw status
   ```

### Optional: Change the Default SSH Port
1. **Edit `/etc/ssh/sshd_config`:**
   ```bash
   sudo nano /etc/ssh/sshd_config
   ```
   Uncomment and modify the port (e.g., `Port 2222`).
2. **Restart SSH:**
   ```bash
   sudo systemctl restart sshd
   ```
3. **Allow the new port through UFW:**
   ```bash
   sudo ufw allow <new_port>
   ```

---

## Installing Docker and Docker Compose

n8n is best run in a Docker container. Follow these steps to install Docker and Docker Compose.

### Step 1: Install Docker
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce -y
```

### Step 2: Install Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### Step 3: Add Your Non-root User to the Docker Group
```bash
sudo usermod -aG docker <nonroot_user>
```
> **Tip:** Log out and log back in to apply group changes.

---

## Installing and Running n8n

There are two common methods to run n8n with Docker.

### Option 1: Using Docker CLI

Run the following command to start n8n in a container:
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=<your_username> \
  -e N8N_BASIC_AUTH_PASSWORD=<your_password> \
  -e NODE_ENV=production \
  n8nio/n8n
```
- Replace `<your_username>` and `<your_password>` with your chosen credentials.
- n8n will be available at [http://<vps_hostname>:5678](http://<vps_hostname>:5678).

### Option 2: Using Docker Compose

1. **Create a file named `docker-compose.yml`:**
   ```yaml
   version: '3'
   services:
     n8n:
       image: n8nio/n8n
       restart: always
       ports:
         - "5678:5678"
       environment:
         - N8N_BASIC_AUTH_ACTIVE=true
         - N8N_BASIC_AUTH_USER=<your_username>
         - N8N_BASIC_AUTH_PASSWORD=<your_password>
         - NODE_ENV=production
       volumes:
         - ~/.n8n:/home/node/.n8n
   ```
2. **Start the n8n service:**
   ```bash
   docker-compose up -d
   ```
   n8n will run in the background and be accessible at [http://<vps_hostname>:5678](http://<vps_hostname>:5678).

---

## Setting Up a Reverse Proxy (Optional)

For better security and to use your own domain with HTTPS, you can set up a reverse proxy using Nginx.

### Example with Nginx

1. **Install Nginx:**
   ```bash
   sudo apt install nginx -y
   ```
2. **Create an Nginx configuration file** (e.g., `/etc/nginx/sites-available/n8n`):
   ```nginx
   server {
       listen 80;
       server_name n8n.yourdomain.com;

       location / {
           proxy_pass http://localhost:5678;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
3. **Enable the configuration and restart Nginx:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```
4. **(Optional) Secure with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d n8n.yourdomain.com
   ```

---

## Post-Installation Security and Maintenance

- **Keep Your System Updated:**  
  Regularly update your VPS, Docker, and n8n.
  ```bash
  sudo apt update && sudo apt upgrade -y
  ```

- **Back Up Your n8n Data:**  
  The Docker volume (here mapped to `~/.n8n`) contains your workflows and credentials.

- **Monitor Logs:**  
  Use Docker logs to troubleshoot:
  ```bash
  docker logs n8n
  ```

- **Firewall and Access:**  
  Ensure only required ports are open and update your UFW rules as needed.

---

## Conclusion

You now have a secure, self-hosted instance of n8n running on your VPS! Use this setup to automate your workflows and integrate various services. Be sure to regularly update your system and back up your configuration to maintain security and reliability.

Happy automating!
```

---

You can save the above content as `n8n-selfhost-guide.md` and use it as a step-by-step reference for installing n8n on your VPS. Enjoy your new self-hosted automation platform!
