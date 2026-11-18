import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUTPUT_DIR = "public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# List of 20 images with descriptions, base tone palettes, and scene types
IMAGE_SPECS = [
    {
        "filename": "fde-hero.webp",
        "title": "FDE ACADEMY PUNE",
        "subtitle": "Forward Deployed Engineering & Applied AI Lab",
        "category": "FLAGSHIP CAMPUS & LAB",
        "palette": ((15, 23, 42), (30, 41, 59), (51, 65, 85)),
        "accent": (201, 240, 74), # lime
        "type": "lab"
    },
    {
        "filename": "fde-classroom.webp",
        "title": "EXECUTIVE AI LEARNING STUDIO",
        "subtitle": "Interactive Systems Design & Architecture Pods",
        "category": "LEARNING ENVIRONMENT",
        "palette": ((24, 28, 25), (42, 48, 44), (68, 76, 70)),
        "accent": (201, 240, 74),
        "type": "classroom"
    },
    {
        "filename": "fde-lecture.webp",
        "title": "ENTERPRISE LLM & RAG ARCHITECTURE",
        "subtitle": "Practitioner Masterclass on Context Engineering",
        "category": "TECHNICAL LECTURE",
        "palette": ((20, 24, 33), (35, 43, 58), (55, 67, 88)),
        "accent": (56, 189, 248),
        "type": "lecture"
    },
    {
        "filename": "fde-architecture-instructor.webp",
        "title": "SOLUTION ARCHITECTURE CLINIC",
        "subtitle": "Deep-Dive into Distributed Agentic Workflows",
        "category": "FACULTY & PRACTITIONER",
        "palette": ((28, 25, 23), (49, 44, 41), (78, 70, 65)),
        "accent": (201, 240, 74),
        "type": "faculty"
    },
    {
        "filename": "fde-collaboration.webp",
        "title": "SPRINT POD COLLABORATION",
        "subtitle": "Cross-Functional FDE Teams Building Client MVPs",
        "category": "PEER LEARNING",
        "palette": ((17, 24, 39), (31, 41, 55), (55, 65, 81)),
        "accent": (168, 85, 247),
        "type": "sprint"
    },
    {
        "filename": "fde-agentic-workshop.webp",
        "title": "AGENTIC AI & CREW ORCHESTRATION",
        "subtitle": "Autonomous Multi-Agent Tool-Calling Labs",
        "category": "HANDS-ON WORKSHOP",
        "palette": ((20, 29, 38), (34, 49, 63), (52, 73, 94)),
        "accent": (201, 240, 74),
        "type": "workshop"
    },
    {
        "filename": "fde-coding-session.webp",
        "title": "PRODUCTION CODE DEPLOYMENT",
        "subtitle": "FastAPI, Docker & Vector Database Integration",
        "category": "CORE CODE SESSIONS",
        "palette": ((15, 23, 42), (23, 37, 84), (30, 58, 138)),
        "accent": (52, 211, 153),
        "type": "coding"
    },
    {
        "filename": "fde-brainstorming.webp",
        "title": "PROBLEM FRAMING & DISCOVERY",
        "subtitle": "Mapping Business Metrics to AI Engineering Feasibility",
        "category": "CONSULTING DISCOVERY",
        "palette": ((24, 24, 27), (39, 39, 42), (63, 63, 70)),
        "accent": (251, 146, 60),
        "type": "discovery"
    },
    {
        "filename": "fde-reception.webp",
        "title": "FDE ACADEMY PUNE HEADQUARTERS",
        "subtitle": "Kalyani Nagar / Magarpatta Tech Corridor, Pune",
        "category": "ACADEMY FACILITY",
        "palette": ((26, 26, 26), (46, 46, 46), (74, 74, 74)),
        "accent": (201, 240, 74),
        "type": "reception"
    },
    {
        "filename": "fde-team-meeting.webp",
        "title": "CLIENT DISCOVERY REVIEW",
        "subtitle": "Mock Client Steering Committee & Architecture Defense",
        "category": "EXECUTIVE REVIEW",
        "palette": ((19, 27, 34), (34, 46, 56), (56, 73, 88)),
        "accent": (201, 240, 74),
        "type": "meeting"
    },
    {
        "filename": "fde-mentor-portrait.webp",
        "title": "PRACTITIONER MENTORSHIP",
        "subtitle": "1-on-1 Code Review & Architectural Guidance",
        "category": "INDUSTRY MENTORS",
        "palette": ((28, 25, 23), (44, 40, 37), (70, 64, 59)),
        "accent": (201, 240, 74),
        "type": "portrait"
    },
    {
        "filename": "fde-student-presentation.webp",
        "title": "CAPSTONE DEMO DAY",
        "subtitle": "Live Production Defense in front of Enterprise Panel",
        "category": "CAPSTONE PRESENTATION",
        "palette": ((18, 24, 27), (32, 44, 49), (51, 68, 75)),
        "accent": (201, 240, 74),
        "type": "presentation"
    },
    {
        "filename": "fde-project-demo.webp",
        "title": "ENTERPRISE TICKET & RAG PLATFORM",
        "subtitle": "Live Evaluation Metrics & Guardrail Tracing",
        "category": "DEPLOYED ARTIFACTS",
        "palette": ((15, 23, 42), (30, 41, 59), (47, 63, 89)),
        "accent": (96, 165, 250),
        "type": "demo"
    },
    {
        "filename": "fde-group-classroom.webp",
        "title": "COHORT DYNAMICS & COMMUNITY",
        "subtitle": "Engineers from Leading Tech Firms Upskilling in GenAI",
        "category": "COHORT LIFE",
        "palette": ((24, 28, 25), (40, 48, 42), (65, 78, 68)),
        "accent": (201, 240, 74),
        "type": "cohort"
    },
    {
        "filename": "fde-pune-campus.webp",
        "title": "PUNE FLAGSHIP CAMPUS",
        "subtitle": "Cutting-edge AI Training Pods & Conference Suites",
        "category": "CAMPUS INFRASTRUCTURE",
        "palette": ((20, 24, 28), (36, 42, 49), (60, 69, 79)),
        "accent": (201, 240, 74),
        "type": "campus"
    },
    {
        "filename": "fde-awards.webp",
        "title": "ACADEMIC & INDUSTRY EXCELLENCE",
        "subtitle": "Curriculum Quality & Practitioner Impact Recognition",
        "category": "RECOGNITION",
        "palette": ((26, 24, 20), (48, 44, 36), (79, 73, 59)),
        "accent": (245, 158, 11),
        "type": "awards"
    },
    {
        "filename": "fde-event.webp",
        "title": "GENAI INNOVATION SUMMIT PUNE",
        "subtitle": "Keynotes on Model Context Protocol & Forward Deployed AI",
        "category": "INDUSTRY CONCLAVE",
        "palette": ((19, 23, 34), (35, 41, 60), (56, 65, 93)),
        "accent": (147, 51, 234),
        "type": "event"
    },
    {
        "filename": "fde-singapore.webp",
        "title": "SINGAPORE TECH CORRIDOR",
        "subtitle": "Marina Bay & One-North Enterprise AI Partnerships",
        "category": "REGIONAL MARKET",
        "palette": ((15, 28, 40), (27, 49, 69), (45, 78, 108)),
        "accent": (56, 189, 248),
        "type": "city"
    },
    {
        "filename": "fde-dubai.webp",
        "title": "DUBAI DIFC & INTERNET CITY",
        "subtitle": "Middle East GenAI Transformation & Enterprise Consulting",
        "category": "REGIONAL MARKET",
        "palette": ((30, 25, 20), (55, 45, 35), (90, 75, 58)),
        "accent": (251, 191, 36),
        "type": "city"
    },
    {
        "filename": "fde-team-editorial.webp",
        "title": "FOUNDING & PRACTITIONER FACULTY",
        "subtitle": "Senior Forward Deployed Engineers & Solution Architects",
        "category": "FACULTY COLLECTIVE",
        "palette": ((22, 24, 23), (38, 41, 39), (62, 66, 64)),
        "accent": (201, 240, 74),
        "type": "team"
    }
]

def create_editorial_image(spec, width=1280, height=800):
    filepath = os.path.join(OUTPUT_DIR, spec["filename"])
    # If file already exists and is non-empty (like hero image from subagent), don't overwrite if it was subagent generated
    if os.path.exists(filepath) and spec["filename"] == "fde-hero.webp":
        print(f"Skipping existing hero image: {filepath}")
        return

    c1, c2, c3 = spec["palette"]
    accent = spec["accent"]
    
    # Create high-res base image
    img = Image.new("RGB", (width, height), color=c1)
    draw = ImageDraw.Draw(img)

    # 1. Subtle sophisticated mesh gradient
    for y in range(height):
        ratio_y = y / height
        # Vertical gradient
        r = int(c1[0] * (1 - ratio_y) + c2[0] * ratio_y)
        g = int(c1[1] * (1 - ratio_y) + c2[1] * ratio_y)
        b = int(c1[2] * (1 - ratio_y) + c2[2] * ratio_y)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # 2. Add atmospheric lighting circles/blobs (subtle studio depth)
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)

    # Diagonal accent glow
    glow_color = (accent[0], accent[1], accent[2], 28)
    odraw.ellipse([width - 500, -200, width + 300, 600], fill=glow_color)
    glow_secondary = (c3[0], c3[1], c3[2], 45)
    odraw.ellipse([-100, height - 400, 500, height + 200], fill=glow_secondary)
    
    # 3. Add sleek tech architectural grid / dot pattern in background
    dot_color = (255, 255, 255, 18)
    for x in range(60, width - 60, 48):
        for y in range(60, height - 60, 48):
            odraw.ellipse([x, y, x + 2, y + 2], fill=dot_color)

    # 4. Minimalist architectural framing lines
    odraw.line([(80, 80), (width - 80, 80)], fill=(255, 255, 255, 30), width=1)
    odraw.line([(80, height - 80), (width - 80, height - 80)], fill=(255, 255, 255, 30), width=1)
    odraw.line([(80, 80), (80, height - 80)], fill=(255, 255, 255, 30), width=1)
    odraw.line([(width - 80, 80), (width - 80, height - 80)], fill=(255, 255, 255, 30), width=1)

    # Combine overlay
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    # 5. Draw brand typography & badges
    # Try loading default or standard font
    try:
        font_large = ImageFont.truetype("arial.ttf", 46)
        font_medium = ImageFont.truetype("arial.ttf", 22)
        font_small = ImageFont.truetype("arial.ttf", 15)
        font_bold = ImageFont.truetype("arialbd.ttf", 16)
        font_brand = ImageFont.truetype("arialbd.ttf", 26)
    except:
        font_large = font_medium = font_small = font_bold = font_brand = ImageFont.load_default()

    # Brand Header Top-Left
    draw.text((120, 115), "FDE ACADEMY", fill=accent, font=font_brand)
    draw.text((310, 122), "|  FORWARD DEPLOYED AI SYSTEMS LAB", fill=(180, 190, 185), font=font_small)

    # Status / Category Badge Top-Right
    draw.rectangle([width - 340, 112, width - 120, 142], outline=accent, width=1)
    draw.text((width - 325, 119), f"// {spec['category']}", fill=(240, 245, 240), font=font_bold)

    # Central Technical Card Representation
    card_x1 = 120
    card_y1 = 200
    card_x2 = width - 120
    card_y2 = height - 160

    # Draw sleek semi-transparent console window
    draw.rectangle([card_x1, card_y1, card_x2, card_y2], fill=(c2[0]//2, c2[1]//2, c2[2]//2), outline=(255, 255, 255, 40), width=1)
    # Console top bar
    draw.rectangle([card_x1, card_y1, card_x2, card_y1 + 44], fill=(c1[0], c1[1], c1[2]))
    draw.ellipse([card_x1 + 18, card_y1 + 17, card_x1 + 28, card_y1 + 27], fill=(239, 68, 68))
    draw.ellipse([card_x1 + 36, card_y1 + 17, card_x1 + 46, card_y1 + 27], fill=(245, 158, 11))
    draw.ellipse([card_x1 + 54, card_y1 + 17, card_x1 + 64, card_y1 + 27], fill=(34, 197, 94))
    draw.text((card_x1 + 80, card_y1 + 14), f"terminal://fde-academy.internal/pods/{spec['type']}.py", fill=(160, 175, 170), font=font_small)

    # Inner technical content
    draw.text((card_x1 + 48, card_y1 + 80), spec["title"], fill=(255, 255, 255), font=font_large)
    draw.text((card_x1 + 48, card_y1 + 145), spec["subtitle"], fill=(195, 205, 200), font=font_medium)

    # Simulated code/pipeline telemetry blocks
    pipe_y = card_y1 + 210
    stages = ["01: Problem Discovery", "02: Architecture Scoping", "03: Agentic Build", "04: Eval & Guardrails", "05: Production Deploy"]
    for i, stage in enumerate(stages):
        sx = card_x1 + 48 + i * 195
        if sx + 180 < card_x2 - 30:
            is_active = (i == 2 or i == 4)
            box_fill = (c1[0] + 15, c1[1] + 15, c1[2] + 15)
            border = accent if is_active else (255, 255, 255, 40)
            draw.rectangle([sx, pipe_y, sx + 180, pipe_y + 60], fill=box_fill, outline=border, width=1)
            draw.text((sx + 14, pipe_y + 14), f"STAGE 0{i+1}", fill=accent if is_active else (140, 150, 145), font=font_bold)
            draw.text((sx + 14, pipe_y + 34), stage.split(": ")[1], fill=(230, 235, 230), font=font_small)

    # Bottom watermark & verified stamp
    draw.text((120, height - 120), "OFFICIAL CAMPUS & PRACTITIONER ARCHIVE  •  PUNE, INDIA", fill=(140, 150, 145), font=font_small)
    draw.text((width - 380, height - 120), "VERIFIED ENTERPRISE AI CURRICULUM", fill=accent, font=font_bold)

    # Save as high-quality WebP
    img.save(filepath, "WEBP", quality=90)
    print(f"Generated: {filepath} ({width}x{height})")

def main():
    print(f"Generating editorial image suite ({len(IMAGE_SPECS)} assets)...")
    for spec in IMAGE_SPECS:
        create_editorial_image(spec)
    print("All image assets prepared successfully!")

if __name__ == "__main__":
    main()
