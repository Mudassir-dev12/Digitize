import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 520
bg = Image.new('RGBA', (W, H), (6, 16, 43, 255))

# Radial glow behind person
glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
center_x, center_y = 280, 260
for r in range(320, 0, -4):
    alpha = int(100 * (1 - r / 320.0))
    gdraw.ellipse([center_x - r, center_y - r, center_x + r, center_y + r], fill=(29, 78, 216, alpha))

glow = glow.filter(ImageFilter.GaussianBlur(30))
bg.paste(glow, (0, 0), glow)

# Rounded mask for banner
mask = Image.new('L', (W, H), 0)
mdraw = ImageDraw.Draw(mask)
mdraw.rounded_rectangle([0, 0, W, H], radius=36, fill=255)

# Load CEO cutout
ceo = Image.open('public/ceo.png').convert('RGBA')
aspect = ceo.width / ceo.height
target_h = int(H * 0.95)
target_w = int(target_h * aspect)
ceo_resized = ceo.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Position bottom-left
ceo_x = 75
ceo_y = H - target_h
bg.paste(ceo_resized, (ceo_x, ceo_y), ceo_resized)

# Draw text
draw = ImageDraw.Draw(bg)

# Blue accent bar
draw.rounded_rectangle([520, 75, 575, 82], radius=4, fill=(37, 99, 235, 255))

try:
    font_bold_large = ImageFont.truetype('arialbd.ttf', 44)
    font_bold_title = ImageFont.truetype('arialbd.ttf', 20)
    font_body = ImageFont.truetype('arial.ttf', 16)
    font_pill = ImageFont.truetype('arialbd.ttf', 15)
    font_motto = ImageFont.truetype('ariali.ttf', 12)
except Exception:
    font_bold_large = ImageFont.load_default()
    font_bold_title = ImageFont.load_default()
    font_body = ImageFont.load_default()
    font_pill = ImageFont.load_default()
    font_motto = ImageFont.load_default()

# Name
draw.text((520, 105), 'Madni Silat', font=font_bold_large, fill=(255, 255, 255, 255))

# Subtitle
draw.text((520, 168), 'Founder and CEO digitize', font=font_bold_title, fill=(56, 189, 248, 255))

# Quote text
lines = [
    "It's about creating meaningful impact. Over the past 7 years, I've worked",
    "with founders, corporations, and industries to build systems that go",
    "beyond expectations.",
    "",
    "Today, we're not just a service provider — we build platforms that scale globally."
]

y = 218
for line in lines:
    if line:
        draw.text((520, y), line, font=font_body, fill=(203, 213, 225, 255))
    y += 24

# Pill button for email
pill_x, pill_y = 520, 375
pill_w, pill_h = 285, 46
draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=23, fill=(13, 42, 107, 240), outline=(37, 99, 235, 180), width=1)
# Small circle inside pill
draw.ellipse([pill_x + 8, pill_y + 8, pill_x + 38, pill_y + 38], fill=(37, 99, 235, 255))
draw.text((pill_x + 18, pill_y + 13), '@', font=font_pill, fill=(255, 255, 255, 255))
draw.text((pill_x + 48, pill_y + 13), 'Infodigitizepk@gmail.com', font=font_pill, fill=(255, 255, 255, 255))

# Bottom right motto
motto_lines = [
    "WE DON'T BUILD PROJECTS.",
    "WE BUILD PLATFORMS THAT",
    "POWER THE FUTURE"
]
my = 405
for line in motto_lines:
    bbox = draw.textbbox((0, 0), line, font=font_motto)
    lw = bbox[2] - bbox[0]
    draw.text((1150 - lw, my), line, font=font_motto, fill=(96, 165, 250, 150))
    my += 18

# Final composite with rounded corners
final = Image.new('RGBA', (W, H), (0, 0, 0, 0))
final.paste(bg, (0, 0), mask)
final.save('public/ceo-showcase-banner.png')
print('Generated public/ceo-showcase-banner.png successfully')

