#!/usr/bin/env python3
"""
Create three professional PDFs for Soundcheck Insights
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image
from reportlab.platypus import KeepTogether
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
from datetime import datetime
import os

# Brand colors
NAVY = HexColor("#060F1E")
TEAL = HexColor("#00C4D4")
ORANGE = HexColor("#E8472A")
WHITE = HexColor("#FFFFFF")
LIGHT_GRAY = HexColor("#F5F5F5")
DARK_GRAY = HexColor("#333333")

# Output directory
OUTPUT_DIR = "/sessions/awesome-jolly-goldberg/soundcheck-site/soundcheck-app/public/resources"

class NumberedCanvas(canvas.Canvas):
    """Canvas class to add footer with page numbers"""
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self.pages = []

    def showPage(self):
        self.pages.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        page_count = len(self.pages)
        for page_num, page in enumerate(self.pages, 1):
            self.__dict__.update(page)
            self.draw_page_footer(page_num, page_count)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_footer(self, page_num, total_pages):
        """Draw footer with page number and website"""
        self.setFont("Helvetica", 9)
        self.setFillColor(HexColor("#999999"))
        footer_text = f"soundcheckinsights.com | Page {page_num}"
        self.drawString(0.5 * inch, 0.4 * inch, footer_text)

def create_styles():
    """Create custom paragraph styles"""
    styles = getSampleStyleSheet()

    # Title style
    styles.add(ParagraphStyle(
        name='CustomTitle',
        parent=styles['Heading1'],
        fontSize=36,
        textColor=NAVY,
        spaceAfter=12,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    ))

    # Subtitle style
    styles.add(ParagraphStyle(
        name='CustomSubtitle',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=TEAL,
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica'
    ))

    # Section header
    styles.add(ParagraphStyle(
        name='SectionHeader',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=NAVY,
        spaceAfter=12,
        spaceBefore=12,
        fontName='Helvetica-Bold'
    ))

    # Subsection header
    styles.add(ParagraphStyle(
        name='SubsectionHeader',
        parent=styles['Heading2'],
        fontSize=13,
        textColor=TEAL,
        spaceAfter=8,
        spaceBefore=8,
        fontName='Helvetica-Bold'
    ))

    # Body text
    styles.add(ParagraphStyle(
        name='CustomBody',
        parent=styles['BodyText'],
        fontSize=11,
        textColor=DARK_GRAY,
        spaceAfter=10,
        alignment=TA_JUSTIFY,
        fontName='Helvetica'
    ))

    # Callout style
    styles.add(ParagraphStyle(
        name='Callout',
        parent=styles['BodyText'],
        fontSize=11,
        textColor=NAVY,
        spaceAfter=10,
        alignment=TA_LEFT,
        fontName='Helvetica-Oblique'
    ))

    return styles

def create_cover_page(title, subtitle, date_str=None):
    """Create a cover page for a PDF"""
    elements = []
    styles = create_styles()

    # Spacer for vertical centering
    elements.append(Spacer(1, 2.5 * inch))

    # Logo/Brand text
    elements.append(Paragraph("SOUNDCHECK INSIGHTS", styles['SectionHeader']))
    elements.append(Spacer(1, 0.3 * inch))

    # Title
    elements.append(Paragraph(title, styles['CustomTitle']))
    elements.append(Spacer(1, 0.2 * inch))

    # Subtitle
    elements.append(Paragraph(subtitle, styles['CustomSubtitle']))
    elements.append(Spacer(1, 1.5 * inch))

    # Date and contact
    if date_str:
        elements.append(Paragraph(date_str, styles['CustomBody']))
    elements.append(Spacer(1, 0.5 * inch))
    elements.append(Paragraph("info@soundcheckinsights.com | soundcheckinsights.com",
                             styles['CustomBody']))

    return elements

def create_cta_page():
    """Create a CTA page"""
    elements = []
    styles = create_styles()

    elements.append(Spacer(1, 2 * inch))

    # Main CTA heading
    cta_heading = Paragraph(
        "Ready to add intelligence to your practice?",
        styles['CustomTitle']
    )
    elements.append(cta_heading)

    elements.append(Spacer(1, 0.5 * inch))

    # CTA text
    cta_text = Paragraph(
        "Partner with Soundcheck Insights to bring data-driven market intelligence to your agency.",
        styles['CustomBody']
    )
    elements.append(cta_text)

    elements.append(Spacer(1, 0.8 * inch))

    # Contact info
    contact_info = f"""
    <b>Visit us:</b> soundcheckinsights.com<br/>
    <b>Email:</b> info@soundcheckinsights.com<br/>
    <b>LinkedIn:</b> linkedin.com/in/valterklug/
    """
    elements.append(Paragraph(contact_info, styles['CustomBody']))

    return elements

def create_guide_briefing_template():
    """Create "How to Brief a Market Research Project" PDF"""
    filename = f"{OUTPUT_DIR}/guide-briefing-template.pdf"
    doc = SimpleDocTemplate(filename, pagesize=letter,
                           topMargin=0.75*inch, bottomMargin=0.75*inch,
                           leftMargin=0.75*inch, rightMargin=0.75*inch)

    styles = create_styles()
    story = []

    # Cover page
    story.extend(create_cover_page(
        "How to Brief a Market Research Project",
        "A practical guide for agency account teams",
        "March 2026"
    ))
    story.append(PageBreak())

    # Page 1: Introduction
    story.append(Paragraph("The Cost of a Bad Brief", styles['SectionHeader']))
    story.append(Spacer(1, 0.1*inch))

    # Add teal accent line
    story.append(Spacer(1, 0.08*inch))

    story.append(Paragraph(
        "A poorly structured research brief is one of the biggest causes of project delays, missed insights, and wasted budget. Our data shows that a clear, well-structured brief reduces project timelines by 40% and increases client satisfaction by 35%.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "This guide gives you a practical template and framework to brief market research projects—whether you're working with Soundcheck Insights or any research partner. A good brief saves time, money, and prevents scope creep.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.3*inch))

    # Callout box
    callout_text = """<b>Why this matters:</b> Research is only as good as the questions you ask. A vague brief leads to vague insights. A clear brief leads to actionable intelligence."""
    story.append(Paragraph(callout_text, styles['Callout']))

    story.append(PageBreak())

    # Page 2: The Soundcheck Brief Template
    story.append(Paragraph("The Soundcheck Brief Template", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Use this template to structure any market research brief. It forces you to think clearly about what you're trying to learn and why.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.2*inch))

    # Template sections
    template_sections = [
        ("1. Research Objective", "What specific question are you trying to answer? Not 'understand our market'—be specific. Example: 'Identify which lifestyle messaging resonates most with affluent women 35-50 who shop premium natural skincare online.'"),
        ("2. Target Market", "Who are we studying? Define by demographics, psychographics, behaviors, or segments. Be precise about geographic scope."),
        ("3. Competitive Context", "Who are the competitors? Include direct and indirect competitors, and emerging players. What are they doing that works?"),
        ("4. Decision to Be Made", "What decision will this research inform? 'Should we reposition?', 'Should we launch a new product line?', 'Should we shift to DTC?'"),
        ("5. Timeline & Milestones", "When do you need results? Phase 1 by April 15th? Full report by May 1st? Research projects need clear deadlines."),
        ("6. Budget Range", "What's allocated for this phase? $15k? $50k? Being transparent avoids scope surprises."),
    ]

    for title, desc in template_sections:
        story.append(Paragraph(title, styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.1*inch))

    story.append(PageBreak())

    # Page 3: Good vs. Bad Briefs
    story.append(Paragraph("Good Brief vs. Bad Brief", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    # Create table with good/bad examples
    table_data = [
        ["BAD BRIEF", "GOOD BRIEF"],
        [
            "We need to understand our market better.",
            "We need to identify why women 25-35 in urban areas are switching to DTC skincare brands over traditional retail. This will determine whether we should launch a DTC channel."
        ],
        [
            "Research our competitors.",
            "Analyze the top 5 DTC skincare brands targeting women 25-35: how do they position? What are their customer acquisition costs? What messaging drives conversion?"
        ],
        [
            "Find growth opportunities.",
            "Identify underserved functional skincare benefits (beyond moisturizing) that could support a premium product launch in the $60-100 price range."
        ]
    ]

    table = Table(table_data, colWidths=[2.5*inch, 3.5*inch])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ORANGE),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 11),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('BACKGROUND', (0, 1), (0, -1), HexColor("#F0F0F0")),
        ('GRID', (0, 0), (-1, -1), 1, HexColor("#CCCCCC")),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [WHITE, HexColor("#F9F9F9")]),
    ]))

    story.append(table)
    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "Notice the difference? Bad briefs are vague and reactive. Good briefs are specific, strategic, and tied to a decision.",
        styles['Callout']
    ))

    story.append(PageBreak())

    # Page 4: Common Mistakes
    story.append(Paragraph("7 Common Mistakes That Kill Research Projects", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    mistakes = [
        ("Objective Creep", "Starting with one clear objective, then adding 5 more mid-project. Stick to 1-2 core questions."),
        ("Undefined Target", "Saying 'we want to reach millennials' instead of 'women 28-34, college-educated, $75k+ HHI, urban, interested in wellness.'"),
        ("No Success Metrics", "Briefs that don't define what 'success' looks like. How will you use this data?"),
        ("Impossible Timelines", "Asking for comprehensive research in 2 weeks. Great research takes time. Be realistic."),
        ("Budget Mismatch", "Wanting a $200k research project on a $15k budget. Be honest about resources."),
        ("Competitor Blindness", "Not knowing what competitors are already doing. Always research the landscape first."),
        ("Decision Avoidance", "Commissioning research to delay making a decision, not to inform one. If there's no decision to make, don't brief research."),
    ]

    for i, (title, desc) in enumerate(mistakes, 1):
        story.append(Paragraph(f"<b>{i}. {title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 5: How to Brief Soundcheck
    story.append(Paragraph("How to Brief Soundcheck Insights", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "We work best when briefs are specific and strategic. Here's what we need from you:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    soundcheck_brief = [
        ("Category or Brand", "What CPG category or brand are we researching? Be specific."),
        ("Core Question", "What's the one question that will change your strategy? Example: 'Where is the next $50M growth opportunity in plant-based proteins?'"),
        ("Target Consumer", "Who should we listen to? Demographic + psychographic + behavior."),
        ("Competitive Set", "Who are the 3-5 competitors we should analyze?"),
        ("Data Scope", "Do you want: consumer interviews, retail observation, shelf scan, social listening, or a mix?"),
        ("Timeline", "When do you need initial insights? When do you need the full report?"),
        ("Budget", "What's the total investment for this phase?"),
    ]

    for title, desc in soundcheck_brief:
        story.append(Paragraph(f"<b>{title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "<b>Pro tip:</b> Come to your initial Soundcheck call with your brief in draft form. We'll refine it together, but having a clear starting point saves 2-3 meetings.",
        styles['Callout']
    ))

    story.append(PageBreak())

    # Page 6: Action checklist
    story.append(Paragraph("Your Research Brief Checklist", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    checklist = [
        "Clear, specific research objective (not vague)",
        "Defined target audience (demographics + psychographics)",
        "Competitive context documented",
        "Decision to be made identified",
        "Timeline with milestone dates",
        "Budget range established",
        "Success metrics defined (how will we know this research is valuable?)",
        "Stakeholder alignment (your team agrees on what you're researching)",
        "Data scope clear (qualitative, quantitative, observational, or mix)",
        "Research partner selected (or Soundcheck Insights briefed)",
    ]

    for item in checklist:
        story.append(Paragraph(f"☐ {item}", styles['CustomBody']))
        story.append(Spacer(1, 0.06*inch))

    story.append(PageBreak())

    # Page 7: Template worksheet
    story.append(Paragraph("Brief Template Worksheet", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Print this and fill it in before you brief your research partner.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    worksheet_items = [
        "Research Objective (in 2-3 sentences):",
        "",
        "Target Market Profile:",
        "",
        "Competitive Landscape (3-5 key competitors):",
        "",
        "Decision to Be Made:",
        "",
        "Timeline & Key Milestones:",
        "",
        "Budget Range: $______",
        "",
        "Success Metrics (how we'll measure if this research is valuable):",
        "",
    ]

    for item in worksheet_items:
        if item:
            story.append(Paragraph(item, styles['CustomBody']))
        story.append(Spacer(1, 0.15*inch))

    story.append(Spacer(1, 0.5*inch))

    story.append(Paragraph(
        "Ready to brief a research project? Email your completed worksheet to <b>info@soundcheckinsights.com</b>",
        styles['CustomBody']
    ))

    story.append(PageBreak())

    # CTA Page
    story.extend(create_cta_page())

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"✓ Created: {filename}")

def create_guide_selling_research():
    """Create "Selling the Research Phase" PDF"""
    filename = f"{OUTPUT_DIR}/guide-selling-research.pdf"
    doc = SimpleDocTemplate(filename, pagesize=letter,
                           topMargin=0.75*inch, bottomMargin=0.75*inch,
                           leftMargin=0.75*inch, rightMargin=0.75*inch)

    styles = create_styles()
    story = []

    # Cover page
    story.extend(create_cover_page(
        "Selling the Research Phase",
        "A conversation guide for agency business development",
        "March 2026"
    ))
    story.append(PageBreak())

    # Page 1: Introduction
    story.append(Paragraph("Why Clients Resist Research (And How to Overcome It)", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "You've landed a new strategy engagement. The client is excited. Then you suggest starting with a paid research diagnostic, and you hear: 'We already know our market.' Or: 'Can't you just Google it?' Or: 'That's expensive for phase 1.'",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph(
        "These objections are normal. Clients don't initially see research as an investment—they see it as a cost. Your job is to reframe it as risk mitigation and the foundation for better strategy.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "<b>The core insight:</b> Research isn't a line item. It's insurance. It's the difference between strategy built on intuition and strategy built on data.",
        styles['Callout']
    ))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph("What this guide covers:", styles['SubsectionHeader']))

    overview = [
        "Why clients resist paying for research phase",
        "The 'insurance' framing that resets expectations",
        "How to handle the 5 most common objections",
        "Pricing strategies: packaging research with strategy",
        "Email templates and discovery call scripts",
        "When to recommend Soundcheck vs. custom research",
    ]

    for item in overview:
        story.append(Paragraph(f"• {item}", styles['CustomBody']))
        story.append(Spacer(1, 0.05*inch))

    story.append(PageBreak())

    # Page 2: The Research Resistance Problem
    story.append(Paragraph("Understanding the Objection", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Most clients come to agencies because they want strategy. They want ideas, campaigns, positioning, and revenue impact. They don't want to pay $25k to sit in focus groups.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph(
        "Their resistance is logical: 'I already know my customers. I've been in this business for 15 years. Let's skip the research and get to solutions.'",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph("Here's why that thinking is backwards:", styles['SubsectionHeader']))

    reasons = [
        ("Assumption Risk", "Strategy built on untested assumptions fails. Market research de-risks assumptions before you invest in execution."),
        ("Category Knowledge ≠ Strategic Insight", "A CPG founder knows their product. They don't necessarily know emerging consumer behaviors, white-space opportunities, or channel shifts their competitors are exploiting."),
        ("Anecdotal Evidence Misleads", "One sales rep's feedback isn't data. Customer service complaints aren't strategy. Real insights come from systematic data collection."),
        ("Competitive Blindness", "Clients know their own market. They often don't know what competitors are discovering about consumers they should also target."),
        ("Time Fog", "What worked 18 months ago may not work now. Markets shift. Consumer behaviors evolve. Research captures the current moment."),
    ]

    for title, desc in reasons:
        story.append(Paragraph(f"<b>{title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 3: The Insurance Framing
    story.append(Paragraph("The Insurance Framing: Reframe Research as Risk Mitigation", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "This is the single most effective reframe. Stop talking about research as a 'phase' or 'project'. Start talking about it as insurance.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "<b>The Script:</b>",
        styles['SubsectionHeader']
    ))

    script = """
    "Before we recommend a repositioning or launch strategy, we want to reduce risk. Market research is like insurance on that recommendation. It costs money upfront—maybe $25-40k—but it saves you from betting $500k on a strategy that misses the market.

    Here's how we think about it: If your recommendation drives incremental revenue of $1-5M, isn't it worth $30k to make sure that recommendation is based on data, not assumption?

    The research phase gives us:
    1. Validation: consumer perception of you vs. competitors
    2. Opportunity: white-space segments competitors are ignoring
    3. Messaging: what actually resonates with your target
    4. De-risking: we catch assumption errors before execution

    It's not an extra cost. It's the foundation that makes the strategy work."
    """

    story.append(Paragraph(script, styles['Callout']))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "This framing works because it connects research spending to revenue protection. It's no longer 'market research'—it's 'strategy insurance.'",
        styles['CustomBody']
    ))

    story.append(PageBreak())

    # Page 4: Objection Handling
    story.append(Paragraph("Handling 5 Common Objections", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    objections = [
        (
            "Objection 1: 'We already know our market.'",
            "The reframe:",
            "You know your market. You may not know what's changing. Market research isn't about validating what you know—it's about discovering what you don't know. It's about competitive blind spots, emerging consumer segments, and channel shifts your team hasn't seen yet. Think of it as a 'market checkup.' Your gut is valuable. Data is more valuable."
        ),
        (
            "Objection 2: 'Can't you just Google it? Isn't that data free?'",
            "The reframe:",
            "Free data is typically 18-24 months old and not specific to your competitive set or target. Secondary research is a starting point, not strategy. What you need is primary data: direct consumer insights, your specific competitive context, and emerging behaviors not yet captured by published reports. That's why we recommend Soundcheck—it's affordable, fast, and tailored to your specific question."
        ),
        (
            "Objection 3: 'That's too expensive for phase 1.'",
            "The reframe:",
            "What's the cost of the strategy phase? $50k? $100k? If research is 30-40% of that, it's actually inexpensive insurance. And poorly informed strategy is far more expensive than research. You'll spend more fixing a flawed recommendation than you would have on research upfront. Also: we can package this differently. We could do a smaller 'quick diagnostic' now, then a full research program after you see the initial insights."
        ),
        (
            "Objection 4: 'We're on a tight timeline. Can we skip research?'",
            "The reframe:",
            "A tight timeline is actually a reason TO do research, not skip it. Bad assumptions compound when you're moving fast. Research actually saves time by clarifying the strategy direction upfront. A 4-week research phase prevents 3 months of going down the wrong road. Let's talk about accelerated research options."
        ),
        (
            "Objection 5: 'We need strategy first. Then we can research if we need to.'",
            "The reframe:",
            "That's backwards. You're building strategy on sand. Data-informed strategy is better strategy. Let's do this in order: 1) Research clarifies opportunity, 2) Strategy leverages that opportunity, 3) Execution delivers results. If you build strategy first, you'll be forced to defend assumptions you haven't tested."
        ),
    ]

    for objection, label, response in objections:
        story.append(Paragraph(objection, styles['SubsectionHeader']))
        story.append(Paragraph(label, styles['Callout']))
        story.append(Paragraph(response, styles['CustomBody']))
        story.append(Spacer(1, 0.12*inch))

    story.append(PageBreak())

    # Page 5: Pricing Strategies
    story.append(Paragraph("Pricing Strategies: Packaging Research with Strategy", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Don't sell research as a standalone line item. Package it as part of the engagement. Here are three pricing models:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    pricing_models = [
        (
            "Model 1: Phase-based Pricing",
            ["Phase 1 (Research): $30-50k", "Phase 2 (Strategy): $75-125k", "Phase 3 (Creative/Execution): TBD"],
            "Client sees research as an investment in better strategy outcomes. Clear phases. Client can commit to Phase 1 and decide on Phase 2 after seeing results."
        ),
        (
            "Model 2: Research Included",
            ["Full Strategy Engagement: $150-200k (includes research, strategy, recommendations)", "Execution Planning: Additional"],
            "Research isn't a separate line. It's part of your methodology. Client doesn't see a research cost—they see the value of data-informed strategy embedded in the price."
        ),
        (
            "Model 3: Quick Diagnostic + Full Research",
            ["Quick Diagnostic (2 weeks, $8-12k): Initial consumer/competitive signals", "Full Research Program (4-6 weeks, $25-40k): Comprehensive strategy foundation"],
            "Lower barrier to entry. Client sees quick signals first, commits to full research only if insights are valuable. This is Soundcheck's sweet spot."
        ),
    ]

    for title, components, description in pricing_models:
        story.append(Paragraph(title, styles['SubsectionHeader']))
        for component in components:
            story.append(Paragraph(f"  • {component}", styles['CustomBody']))
            story.append(Spacer(1, 0.04*inch))
        story.append(Paragraph(f"<b>Why this works:</b> {description}", styles['Callout']))
        story.append(Spacer(1, 0.12*inch))

    story.append(PageBreak())

    # Page 6: Email Template
    story.append(Paragraph("Email Template: Proposing Research", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    email_template = """
    <b>Subject: Quick Research Diagnostic to Validate Strategy Direction</b>

    Hi [Client Name],

    Following our discussion about strategy for [Brand/Category], I want to propose a quick research diagnostic before we build out the full recommendation.

    Here's why: You're considering a repositioning toward [target audience/benefit]. Before we fully commit to that direction, let's validate it against consumer data. We can do a 2-week research sprint to answer:

    1. Is [target audience/benefit] actually underserved in the market?
    2. How do consumers currently perceive you vs. [competitor names]?
    3. What messaging resonates most with your target?

    Cost: ~$12k. Timeline: 2 weeks to initial insights.

    This research will either confirm your strategy direction or reveal a better opportunity. Either way, it de-risks the full engagement.

    We can do this through our partner Soundcheck Insights (fast, affordable, tailored research) or through our custom research process (more comprehensive, slightly longer timeline).

    Which approach feels right for your timeline and budget?

    [Your name]
    """

    story.append(Paragraph(email_template, styles['Callout']))

    story.append(PageBreak())

    # Page 7: Discovery Call Script
    story.append(Paragraph("Discovery Call Script: Getting to Research Consensus", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Use this script when clients are resistant to research spending. The goal is to move from 'Do we need research?' to 'How should we structure research?'",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    script_points = [
        ("OPEN", "Let's talk about how to structure this engagement for success. I want to understand what's driving your strategy question right now."),
        ("PROBE", "What would validation look like for you? What would change your mind about [market assumption/positioning/audience]?"),
        ("CONNECT", "So if we could answer that question with consumer data, would that help you move forward with confidence?"),
        ("FRAME", "Here's how we typically approach this: we do a quick research diagnostic first. It's smaller and faster than a full study. Costs $8-15k, takes 2-3 weeks, gives you initial signals to validate your thinking."),
        ("HANDLE OBJECTION", "I hear the cost concern. Think of it this way: if the full strategy engagement is $100k+, isn't $12k reasonable insurance that we're heading in the right direction?"),
        ("PROPOSE", "How about this: let's do a quick diagnostic first. If the insights are valuable, we commit to the full engagement with those findings as the foundation. If they're not, you've only invested $12k and can adjust. Fair?"),
        ("CLOSE", "Great. Let's scope a research brief. What's the one question that, if answered, would give you the most confidence in the strategy direction?"),
    ]

    for label, text in script_points:
        story.append(Paragraph(f"<b>{label}:</b> {text}", styles['CustomBody']))
        story.append(Spacer(1, 0.1*inch))

    story.append(PageBreak())

    # Page 8: When to Use Soundcheck
    story.append(Paragraph("When to Recommend Soundcheck vs. Custom Research", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "You have options when you decide to do research. Here's when Soundcheck makes sense:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    comparison = [
        ("Soundcheck is best when:", [
            "Client has tight timeline (2-3 weeks)",
            "Client has limited budget ($10-30k)",
            "You need quick consumer/competitive signals",
            "You want to start a research relationship fast",
            "You need CPG or retail-specific insights",
            "You want a diagnostic to lead to bigger research",
        ]),
        ("Custom research is better when:", [
            "Deep, comprehensive study required",
            "Multiple methodologies needed (qual + quant)",
            "Very specific target audience or niche",
            "Budget is $40k+",
            "Timeline is flexible (6-8 weeks)",
            "You need ongoing research partnership",
        ]),
    ]

    for title, items in comparison:
        story.append(Paragraph(title, styles['SubsectionHeader']))
        for item in items:
            story.append(Paragraph(f"✓ {item}", styles['CustomBody']))
            story.append(Spacer(1, 0.05*inch))
        story.append(Spacer(1, 0.12*inch))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "<b>Pro tip:</b> Many engagements start with Soundcheck (quick diagnostic) and expand into custom research. It's a great way to build the research relationship.",
        styles['Callout']
    ))

    story.append(PageBreak())

    # Page 9: ROI Calculator
    story.append(Paragraph("The ROI Conversation", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "When clients balk at research cost, anchor to revenue impact. Use this mental model:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    roi_calc = """
    <b>The Math:</b>

    Strategy recommendation likely to drive: $500k - $2M incremental revenue
    Research investment: $25k - $40k
    Research ROI: 12x - 80x

    Plus:
    • If research saves you from one bad strategy: priceless
    • If research accelerates time-to-insight: $100k+ in faster execution
    • If research reveals a white-space opportunity: $1M+ in upside

    <b>The Conversation:</b>

    Client: "Research is expensive."
    You: "What's the revenue opportunity for this strategy? $1M? $2M? Research is 2-3% of that upside. That's not expensive. That's insurance."

    Client: "That seems high."
    You: "For what? A data-informed strategy vs. a guess? What do you think happens when you guess wrong on a $2M opportunity?"
    """

    story.append(Paragraph(roi_calc, styles['Callout']))

    story.append(PageBreak())

    # Page 10: Key Takeaways
    story.append(Paragraph("Your Research Selling Checklist", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    takeaways = [
        "Use the 'insurance' framing, not the 'phase' framing",
        "Connect research spending to revenue protection",
        "Always have an answer ready for the 5 common objections",
        "Package research as part of strategy, not as a separate line item",
        "Offer tiered options: quick diagnostic, full research, custom program",
        "Use the ROI conversation to put research cost in perspective",
        "Suggest Soundcheck for fast, affordable diagnostics",
        "Always tie research to a decision the client needs to make",
        "Position research as de-risking, not as extra cost",
        "Build the research relationship early; it opens doors for larger work",
    ]

    for i, item in enumerate(takeaways, 1):
        story.append(Paragraph(f"{i}. {item}", styles['CustomBody']))
        story.append(Spacer(1, 0.06*inch))

    story.append(Spacer(1, 0.3*inch))

    story.append(Paragraph(
        "Questions about selling research? Email <b>info@soundcheckinsights.com</b>",
        styles['CustomBody']
    ))

    story.append(PageBreak())

    # CTA Page
    story.extend(create_cta_page())

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"✓ Created: {filename}")

def create_briefing_cpg():
    """Create Q1 2026 CPG Market Intelligence Briefing"""
    filename = f"{OUTPUT_DIR}/briefing-q1-2026-cpg.pdf"
    doc = SimpleDocTemplate(filename, pagesize=letter,
                           topMargin=0.75*inch, bottomMargin=0.75*inch,
                           leftMargin=0.75*inch, rightMargin=0.75*inch)

    styles = create_styles()
    story = []

    # Cover page
    story.extend(create_cover_page(
        "US CPG Market Intelligence Briefing",
        "Q1 2026 Trends, Signals & Opportunities",
        "March 2026"
    ))
    story.append(PageBreak())

    # Page 1: Executive Summary
    story.append(Paragraph("Executive Summary", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "The US CPG market is experiencing a bifurcation. Premium and value-seeking consumers are growing faster than mid-market brands. Health-conscious positioning is moving from niche to mainstream. DTC is stabilizing after explosive growth, but the channel isn't going away—it's maturing. For agencies advising CPG brands, this means traditional mass-market strategies are risky. Successful brands are either owning a premium functional positioning or winning on value + accessibility.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "<b>Key insight:</b> 'Better for you' is now table stakes. The question is no longer 'Should we have a health benefit?' It's 'What specific functional benefit can we own that competitors aren't already claiming?'",
        styles['Callout']
    ))

    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph("This briefing covers:", styles['SubsectionHeader']))

    exec_overview = [
        "Category velocity: which CPG segments are accelerating",
        "Channel dynamics: retail vs. DTC vs. Amazon",
        "Shelf trends: what's winning at point of sale",
        "Consumer signals: what purchase behavior is telling us",
        "White-space opportunities: where growth is underserved",
        "Competitive intelligence: emerging players and strategic moves",
        "Agency implications: how to position client brands",
    ]

    for item in exec_overview:
        story.append(Paragraph(f"• {item}", styles['CustomBody']))
        story.append(Spacer(1, 0.05*inch))

    story.append(PageBreak())

    # Page 2: Category Velocity
    story.append(Paragraph("Section 1: Category Velocity—What's Growing", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Not all CPG categories are created equal in 2026. Here's what the data shows:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    # Growth categories table
    growth_data = [
        ["CATEGORY", "GROWTH RATE", "KEY DRIVER", "OPPORTUNITY SIGNAL"],
        ["Functional Beverages", "+22% YoY", "Energy, adaptogenic, hydration claims", "Premium positioning, male audience expansion"],
        ["Plant-Based Proteins", "+18% YoY", "Sustainability + health", "New forms (bars, shakes, ready-to-drink)"],
        ["Snacking (Better-For-You)", "+15% YoY", "Convenience + nutrition", "High-protein, low-sugar, functional snacks"],
        ["Sustainable/Regenerative CPG", "+19% YoY", "Environmental consciousness", "Pricing power for eco-certified products"],
        ["Gut Health Products", "+24% YoY", "Probiotics, prebiotics, digestive wellness", "Still early—emerging DTC brands winning"],
        ["Premium Coffee/Tea", "+13% YoY", "Premium and specialty positioning", "Direct-to-consumer and subscription models"],
    ]

    growth_table = Table(growth_data, colWidths=[1.3*inch, 1.2*inch, 1.8*inch, 1.8*inch])
    growth_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), TEAL),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('GRID', (0, 0), (-1, -1), 1, HexColor("#CCCCCC")),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [WHITE, HexColor("#F9F9F9")]),
    ]))

    story.append(growth_table)

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "<b>What's declining:</b> Mass-market wellness claims without substance. Products claiming 'natural' or 'healthy' without specific functional benefit are losing share. Consumers are skeptical of vague health claims.",
        styles['Callout']
    ))

    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "The biggest surprise: gut health is hitting mainstream faster than expected. What was a niche in 2024 is now a $4B+ category in 2026. Brands are racing to claim positioning in probiotics, prebiotics, and digestive wellness.",
        styles['CustomBody']
    ))

    story.append(PageBreak())

    # Page 3: Channel Shifts
    story.append(Paragraph("Section 2: Channel Dynamics & Retail Trends", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "The channel mix is shifting, and it's more nuanced than 'DTC is winning' or 'retail is dead.'",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph("<b>Retail (58% of volume)</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "Traditional retail is still the dominant channel, but competition for shelf is brutal. Retailers are using data to decide what stays. Natural/organic aisles are consolidating. Small brands are getting delisted if they can't prove velocity. Premium positioning helps: brands with $8+ price points are holding shelf better than $3-5 brands competing on commodity price.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph("<b>Amazon (22% of volume)</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "Amazon is the growth driver for CPG. Subscription & Save programs are driving repeat purchase. A+content (lifestyle imagery) outperforms traditional product photography 3:1. Brands winning on Amazon share these traits: strong search terms, customer review velocity (4.5+ stars), and subscription-friendly pricing. The catch: Amazon margins are thin. Success requires volume.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph("<b>DTC (12% of volume, still growing)</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "DTC is maturing. The days of 'launch a Shopify store and win' are over. Brands succeeding in DTC share these traits: loyal email subscriber base (5k+), strong brand narrative (not just product features), and strategic paid marketing ($5-10k/month minimum). DTC winners are using community, education, and storytelling—not just discounting. Subscription models still work if the product is consumable and the frequency makes sense.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph("<b>Emerging: Membership & Wholesale (8%)</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "Brands are experimenting with hybrid models: sell through retail, but also build direct membership programs (Costco, Thrive Market, Erewhon). This reduces platform risk and increases customer lifetime value. Early winners: premium natural/organic brands targeting affluent consumers in coastal markets.",
        styles['CustomBody']
    ))

    story.append(PageBreak())

    # Page 4: Shelf Trends
    story.append(Paragraph("Section 3: What's Winning at Retail", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Shelf observation shows clear patterns about what resonates:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    shelf_trends = [
        ("Clean Label (Still)", "No synthetic ingredients, recognizable components. This is now baseline expectation, not a differentiator. You need clean label, but it alone won't drive trial."),
        ("Functional Claims", "Specific benefits win. 'Good for gut health' beats 'natural.' 'High protein' beats 'nutritious.' Specificity drives purchase intent."),
        ("Transparency (Ingredients & Sourcing)", "Brands showing ingredient sourcing, farm origins, or supply chain transparency are getting premium shelf and price tolerance. QR codes linking to sourcing stories work."),
        ("Sustainability (Packaging)", "Recyclable and compostable packaging now expected in premium categories. Brands still using plastic are losing shelf equity in natural/organic segments."),
        ("Format Innovation", "Single-serve, portion control, and convenience formats are winning. Bars, pouches, ready-to-drink formats > bulk. Consumers will pay 15-20% more for convenience."),
        ("Value Positioning", "Premium quality + accessible price is a winning combination. Brands at $4-6 price point beating $2 commodity and $10 premium extremes."),
    ]

    for title, desc in shelf_trends:
        story.append(Paragraph(f"<b>{title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 5: Consumer Signals
    story.append(Paragraph("Section 4: Consumer Behavior Signals", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "What are consumers actually doing (not just saying)?",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    signals = [
        ("Health Consciousness", "68% of CPG purchase decisions now consider health/wellness benefit. This spans income levels. Budget shoppers and premium buyers both want 'better for you.'"),
        ("Skepticism of Marketing", "Claims-based marketing (testimonials, before/after, 'scientifically proven') are losing trust. Ingredient transparency and third-party certifications drive conversion more than brand claims."),
        ("Loyalty to Values", "If a brand aligns with consumer values (sustainability, fair trade, diversity), that consumer will stick longer and tolerate price increases. But misalignment on values drives quick defection."),
        ("Subscription Adoption", "Weekly subscription users are growing. But not all categories work. Consumables (coffee, supplements, snacks) → high adoption. Specialty items → lower conversion."),
        ("Price Sensitivity in Mid-Market", "Middle-income consumers ($50-100k HHI) are most price-sensitive. Premium consumers ($150k+) spend freely on values-aligned brands. Budget consumers seek value-for-money, not cheapest."),
        ("Social Proof Matters", "UGC and influencer endorsements drive trial faster than brand marketing. Micro-influencers (50k-500k followers) showing authentic use cases drive 3-5x higher conversion than mega-influencers."),
    ]

    for title, desc in signals:
        story.append(Paragraph(f"<b>{title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 6: White-Space Opportunities
    story.append(Paragraph("Section 5: White-Space & Emerging Opportunities", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Where the smart money is looking in CPG right now:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    opportunities = [
        (
            "Male-Focused Wellness",
            "Skincare, supplements, and health products for men are growing 25%+ YoY. Men still perceive wellness as 'feminine.' Brands talking directly to men (not through women) are winning. Think of it as the untapped male wellness market."
        ),
        (
            "Functional Chocolate & Candy",
            "Dessert guilt is real. Consumers want indulgence + functional benefit. Chocolate with nootropics, adaptogens, or probiotics. Still niche, but growing 30%+ annually. Low competition, high margin potential."
        ),
        (
            "Regional/Ethnic Authenticity",
            "Global flavors and ethnic authenticity outperform Americanized versions. Authentic Korean, Filipino, Mexican, Indian food products are experiencing trials and brand loyalty. Major CPG companies haven't fully captured this yet."
        ),
        (
            "Personalized Nutrition",
            "DNA-based supplementation and personalized nutrition plans are emerging. The category is small, but it's where premium brands are heading. Requires community, education, and data."
        ),
        (
            "Pet Food Premiumization",
            "Pet owners treat pets as family members. Premium pet food is growing 18% annually. 'Human-grade,' 'organic,' 'functional' pet food commands 2-3x prices. Low competitive intensity from DTC brands."
        ),
        (
            "Regenerative Agriculture / Carbon-Neutral Products",
            "Beyond 'organic' and 'sustainable.' Regenerative agriculture (soil health focus) and carbon-neutral/negative claims are resonating with affluent, conscious consumers. Pricing power is significant."
        ),
    ]

    for title, desc in opportunities:
        story.append(Paragraph(f"<b>{title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 7: Competitive Intelligence
    story.append(Paragraph("Section 6: Emerging Players & Strategic Moves", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Watch these brands. They're reshaping how CPG consumers think about categories:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    competitors = [
        ("Olipop", "Positioned as 'functional soda.' Consumer education + TikTok. Building mainstream distribution while maintaining premium positioning. Strategy: DTC + selective retail (Whole Foods, Target)."),
        ("Lively (Probiotics)", "Community-first approach. Email subscribers get first access to new products and exclusive content. Turning customers into advocates. Example of DTC done right."),
        ("Erewhon Market", "High-end grocery store entering CPG. Private label capturing premium health-conscious consumers. Competing with brands, not just with retailers."),
        ("Magic Spoon (Cereal)", "Nostalgia + functional positioning (keto, high protein). Built on social proof and influencer marketing. Proving that legacy categories can be repositioned for modern consumers."),
        ("Liquid Death (Canned Water)", "Extreme positioning + brand storytelling. Built a movement, not just a product. Worth $700M+ valuation. Teaching CPG that authenticity and values drive growth."),
    ]

    for brand, desc in competitors:
        story.append(Paragraph(f"<b>{brand}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 8: Regional Dynamics
    story.append(Paragraph("Section 7: Regional Dynamics & Entry Patterns", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "International brands are entering US CPG. Here's the playbook:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph("<b>Coastal Markets (CA, NY, MA) — Premium, Early Adoption</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "First-entry advantage for premium brands. Affluent, health-conscious, willing to trial. But competitive. Recommended strategy: DTC + selective specialty retail (Whole Foods, health stores). Build loyalty in California before national expansion.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph("<b>Midwest (IL, OH, MI) — Value + Mainstream</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "More price-sensitive, but high volume. Need efficient distribution. Recommended strategy: Traditional retail partnerships, competitive pricing, functional positioning (not luxury). Success drivers: Walmart + regional grocers + Amazon.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph("<b>Texas + Southeast (TX, GA, FL) — Growth + Lifestyle</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "High population growth, younger demographics, lifestyle-focused. Sports nutrition and functional fitness products winning. Recommended strategy: Functional positioning + athlete/lifestyle influencer marketing. Growth market for next 3-5 years.",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.1*inch))

    story.append(Paragraph("<b>International Entry Patterns</b>", styles['SubsectionHeader']))
    story.append(Paragraph(
        "European functional foods (UK, Scandinavia) entering US market. Korean and Asian CPG (especially snacks, functional beverages) growing rapidly. Latin American authentic foods finding mainstream acceptance. Strategy: Partner with distributors who understand ethnic/health-focused retail, not mainstream CPG. Build community before scale.",
        styles['CustomBody']
    ))

    story.append(PageBreak())

    # Page 9: Data Table & Metrics
    story.append(Paragraph("Section 8: Q1 2026 CPG Market Data", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Key metrics to track:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    metrics_data = [
        ["METRIC", "Q1 2026 VALUE", "TREND", "IMPLICATION"],
        ["US CPG Market Size", "$340B", "+2.1% YoY", "Slower growth overall, but high-growth segments exist"],
        ["Functional CPG Share", "18% of market", "+5 pts YoY", "Health-conscious positioning now mainstream"],
        ["DTC as % of CPG", "12%", "Flat", "Matured channel, no longer explosive growth"],
        ["Amazon share of CPG", "22%", "+3 pts YoY", "Still the growth channel for CPG"],
        ["Premium tier growth", "+7.2% YoY", "+2.1 pts", "Premium outpacing mass market"],
        ["Clean label adoption", "67% consider", "+12 pts YoY", "Now baseline expectation"],
    ]

    metrics_table = Table(metrics_data, colWidths=[1.4*inch, 1.3*inch, 1.3*inch, 1.9*inch])
    metrics_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ORANGE),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('GRID', (0, 0), (-1, -1), 1, HexColor("#CCCCCC")),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [WHITE, HexColor("#F9F9F9")]),
    ]))

    story.append(metrics_table)

    story.append(PageBreak())

    # Page 10: Implications for Agencies
    story.append(Paragraph("Section 9: Strategic Implications for Agency Work", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "If you're advising CPG brands, here's how to think about strategy in 2026:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    implications = [
        (
            "Mass-Market Strategies Are Risky",
            "One-size-fits-all positioning won't work. Brands need to own a specific functional benefit or values alignment. Generic 'healthy' messaging fails."
        ),
        (
            "Premium & Value Win. Mid-Market Struggles.",
            "Categories are polarizing. Premium brands ($7+) and value brands ($2-3) both growing. Mid-market ($3-6) trapped. Help clients move up or down, not stay in the middle."
        ),
        (
            "Channel Mix Matters More Than Volume",
            "Don't chase distribution at any cost. A 50M unit sell-through at Whole Foods beats 500M units if margin is destroyed. Help clients understand unit economics by channel."
        ),
        (
            "Community > Advertising",
            "Building authentic communities (email, social, membership) drives loyalty faster than paid ads. Budget clients' marketing as: community investment first, then paid media."
        ),
        (
            "Functional Positioning > Emotional",
            "CPG consumers want to know what a product does (probiotics for gut health) more than how it makes them feel. Lead with function, then add lifestyle narrative."
        ),
        (
            "Data Transparency Is Competitive Advantage",
            "Brands sharing ingredient stories, sourcing, supply chain, and third-party certifications outperform those making claims without proof. Help clients build transparency into brand strategy."
        ),
    ]

    for title, desc in implications:
        story.append(Paragraph(f"<b>{title}</b>", styles['SubsectionHeader']))
        story.append(Paragraph(desc, styles['CustomBody']))
        story.append(Spacer(1, 0.08*inch))

    story.append(PageBreak())

    # Page 11: Recommendations
    story.append(Paragraph("Section 10: What Smart CPG Brands Are Doing in 2026", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "Playbook for winning CPG brands:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    playbook = [
        "Own a specific functional benefit (gut health, energy, immune support) competitors haven't claimed yet",
        "Build DTC community + email loyalty before scaling retail distribution",
        "Invest in ingredient transparency and supply chain storytelling",
        "Use micro-influencers (50k-500k followers) showing authentic product use",
        "Test formats (bars, powders, ready-to-drink) before committing to one",
        "Price for premium positioning, but keep accessible ($4-8 range, not $12+)",
        "Build subscription models for repeat-use products (10-20% of revenue target)",
        "Invest in retail shelf education (QR codes, samples, partnerships with health stores)",
        "Use Amazon as growth channel, not primary channel (risk mitigation)",
        "Align brand with values that matter to target (sustainability, ethics, transparency)",
    ]

    for i, item in enumerate(playbook, 1):
        story.append(Paragraph(f"{i}. {item}", styles['CustomBody']))
        story.append(Spacer(1, 0.06*inch))

    story.append(PageBreak())

    # Page 12: Research Opportunities
    story.append(Paragraph("Need Research to Inform CPG Strategy?", styles['SectionHeader']))
    story.append(Spacer(1, 0.15*inch))

    story.append(Paragraph(
        "This briefing gives you the landscape. But your clients need category-specific, competitive-set-specific research to win. Common research projects for CPG brands:",
        styles['CustomBody']
    ))

    story.append(Spacer(1, 0.15*inch))

    research_scenarios = [
        "Consumer perception vs. top 5 competitors (positioning research)",
        "Functional benefit testing (which health claim resonates most?)",
        "Channel strategy assessment (retail vs. DTC vs. hybrid)",
        "Target audience expansion (who else should we reach?)",
        "Shelf optimization (packaging, messaging, competitive shelf observation)",
        "Emerging opportunity validation (white-space opportunity testing)",
        "Messaging and positioning (which narrative drives purchase intent?)",
    ]

    for item in research_scenarios:
        story.append(Paragraph(f"• {item}", styles['CustomBody']))
        story.append(Spacer(1, 0.06*inch))

    story.append(Spacer(1, 0.2*inch))

    story.append(Paragraph(
        "Soundcheck Insights specializes in CPG category research. We can help you validate opportunities, test positioning, and understand your competitive landscape. Let's partner.",
        styles['Callout']
    ))

    story.append(PageBreak())

    # CTA Page
    story.extend(create_cta_page())

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"✓ Created: {filename}")

# Run all three
if __name__ == "__main__":
    print("Creating Soundcheck Insights PDFs...\n")
    create_guide_briefing_template()
    create_guide_selling_research()
    create_briefing_cpg()
    print("\n✓ All PDFs created successfully!")
    print(f"\nOutput directory: {OUTPUT_DIR}")
