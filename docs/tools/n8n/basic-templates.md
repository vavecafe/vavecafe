---
sidebar_position: 1
title: n8n Basic Templates
description: Ready-to-use n8n workflow templates
---

# Essential n8n Templates

Get started quickly with these tested n8n workflow templates.

## File Organization Workflow

```json
{
  "nodes": [
    {
      "parameters": {
        "path": "C:/Downloads"
      },
      "name": "Watch Downloads",
      "type": "n8n-nodes-base.watchFiles",
      "position": [
        250,
        300
      ]
    }
  ]
}
```

## Email Automation Template

```json
{
  "nodes": [
    {
      "parameters": {
        "event": "new_email"
      },
      "name": "When Email Arrives",
      "type": "n8n-nodes-base.emailTrigger",
      "position": [
        250,
        300
      ]
    }
  ]
}
```