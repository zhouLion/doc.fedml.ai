sudo mkdir .render_token_bind
sudo wget -q https://doc.fedml.ai/python/render.py -P .render_token_bind
python3 .render_token_bind/render.py
sudo rm -rf .render_token_bind
