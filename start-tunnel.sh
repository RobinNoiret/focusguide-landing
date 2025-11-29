#!/bin/bash
cd /home/beta/focusguide/focusguide-landing
cloudflared tunnel --origincert /home/beta/.cloudflared/cert.pem --config tunnel-config.yml run focusguide-landing