'use client'

import Image from 'next/image'
import { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Blocks, Clock3, Compass, GraduationCap, Heart, Lightbulb, MapPin, Menu, MessageCircle, Music2, Paintbrush, Phone, ShieldCheck, Smile, Sparkles, Sun, Users, X } from 'lucide-react'

const navItems = [['Home', '#home'], ['About Us', '#about'], ['Programs', '#programs'], ['Facilities', '#why-us'], ['Gallery', '#gallery'], ['Testimonials', '#testimonials'], ['Contact', '#enquiry']]
const features = [
  { title: 'Safe & Caring', second: 'Environment', Icon: Smile, color: 'pink' },
  { title: 'Play Based', second: 'Learning', Icon: Lightbulb, color: 'yellow' },
  { title: 'Experienced &', second: 'Caring Teachers', Icon: Users, color: 'green' },
  { title: 'Holistic', second: 'Development', Icon: Sparkles, color: 'blue' },
]
const programs = [
  { name: 'Play Group', age: '(1.5 – 2.5 Years)', Icon: Smile, color: 'pink' },
  { name: 'Nursery', age: '(2.5 – 3.5 Years)', Icon: Blocks, color: 'yellow' },
  { name: 'LKG', age: '(3.5 – 4.5 Years)', Icon: BookOpen, color: 'green' },
  { name: 'UKG', age: '(4.5 – 5.5 Years)', Icon: GraduationCap, color: 'blue' },
]
const benefits = [
  { title: 'Personalized', second: 'Attention', Icon: Heart, color: 'pink' },
  { title: 'Modern', second: 'Infrastructure', Icon: Blocks, color: 'yellow' },
  { title: 'Fun & Engaging', second: 'Activities', Icon: Sparkles, color: 'green' },
  { title: 'Safe & Secure', second: 'Campus', Icon: ShieldCheck, color: 'blue' },
]
const photos = [
  { src: '/gallery-classroom.png', alt: 'Bright and welcoming preschool classroom' },
  { src: '/gallery-art.png', alt: 'Children enjoying a painting activity' },
  { src: '/gallery-playroom.png', alt: 'Colorful indoor play area' },
  { src: '/gallery-learning.png', alt: 'Children learning together in class' },
]
const reviews = [
  { quote: 'Vel’s Kids Play School has given my child a wonderful start. The teachers are caring, patient and very dedicated.', name: 'Parent' },
  { quote: 'A warm, happy place where our little one feels confident, curious and excited to learn every day.', name: 'Parent' },
  { quote: 'We are grateful for the thoughtful teachers and the loving environment they create for every child.', name: 'Parent' },
]

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="#home" className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label="Vel's Kids Play School home"><span className="brand-mark"><span /><span /><span /></span><span className="brand-copy"><strong><i>Vel&apos;s</i> <b>Kids</b></strong><small>Play School</small></span></a>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header"><div className="header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</nav><a className="call-button" href="tel:07868000153"><Phone size={15} fill="currentColor" /> <span>Call Us</span></a><button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}<ArrowRight size={15} /></a>)}<a className="mobile-call" href="tel:07868000153"><Phone size={15} /> Call 078680 00153</a></nav>}</header>
}

function Hero() {
  return <section className="hero education-hero" id="home"><div className="hero-copy"><Sun className="hero-sun" /><Heart className="hero-heart" /><span className="hero-star">✳</span><p className="eyebrow hero-eyebrow"><BookOpen size={14} /> PLAY · DISCOVER · GROW</p><h1 className="education-hero-title"><span>Where little minds</span><strong>grow big ideas.</strong></h1><h2>A happy beginning for<br />a brighter tomorrow</h2><p className="hero-description">A playful, caring start to confident learning.</p><div className="hero-learning-points"><span><Blocks /> Hands-on learning</span><span><Heart /> Caring teachers</span><span><Sun /> Ages 1.5–5.5</span></div><div className="hero-actions"><a href="#programs" className="button button-yellow">Explore Our Programs <ArrowRight size={17} /></a><a href="tel:07868000153" className="hero-call-link"><Phone size={15} /> Talk to our team</a></div></div><div className="hero-photo"><Image src="/hero-classroom.png" alt="Smiling preschool girl drawing in her classroom" fill priority sizes="(max-width: 700px) 100vw, 56vw" /><div className="hero-image-note"><span className="hero-image-icon"><Sparkles /></span><span><strong>Learning through play</strong><small>Big discoveries begin here</small></span></div><div className="hero-age-tag">Ages 1.5–5.5</div></div><svg className="hero-bottom-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path className="hero-wave-back" d="M0 24 C185 60 330 70 520 53 C705 36 862 14 1040 28 C1190 39 1310 67 1440 55 L1440 100 L0 100 Z" /><path className="hero-wave-front" d="M0 48 C180 82 360 86 560 64 C760 42 930 38 1110 53 C1230 63 1350 75 1440 66 L1440 100 L0 100 Z" /></svg></section>
}

function SectionWave({ tone, flipped = false }: { tone: 'programs' | 'cream' | 'rhythm' | 'enquiry'; flipped?: boolean }) {
  return <svg className={`section-wave section-wave-${tone}${flipped ? ' section-wave-flipped' : ''}`} viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path className="section-wave-soft" d="M0 12 C190 47 340 52 530 38 C730 23 870 7 1040 21 C1215 35 1335 48 1440 29 L1440 70 L0 70 Z" /><path className="section-wave-fill" d="M0 26 C180 57 355 61 550 46 C755 30 920 19 1100 33 C1250 45 1355 58 1440 45 L1440 70 L0 70 Z" /></svg>
}

function FeatureBar() { return <section className="feature-bar" aria-label="Our commitments">{features.map(({ title, second, Icon, color }) => <div className="feature-item" key={title}><span className={`icon-disc ${color}`}><Icon /></span><p>{title}<br />{second}</p></div>)}</section> }

function About() {
  return <section className="about section-wrap" id="about"><div className="about-image image-frame"><Image src="/blocks-classroom.png" alt="Preschool children building with colorful blocks" fill sizes="(max-width: 700px) 90vw, 42vw" /></div><div className="about-copy"><p className="section-kicker"><span />About Us</p><h2>Nurturing Young Minds<br className="desktop-only" /> with Love &amp; Care</h2><p>Vel&apos;s Kids Play School is a trusted kindergarten in Villupuram, dedicated to providing quality early childhood education. We believe that every child is unique and deserves individual attention, love and the right guidance to build a strong foundation for their future.</p><a className="button button-outline" href="#contact">Know More About Us <ArrowRight size={16} /></a><Heart className="about-heart" /></div></section>
}

function Programs() { return <section className="programs" id="programs"><div className="section-wrap programs-inner"><div className="center-heading"><p className="section-kicker"><span />Our Programs</p><h2>Age-Appropriate Learning Programs</h2><p>We offer structured and play-based learning programs tailored to every stage of your child&apos;s growth.</p></div><div className="program-grid">{programs.map(({ name, age, Icon, color }) => <a className={`program-card ${color}`} href="#contact" key={name}><Icon className="program-icon" /><strong>{name}</strong><span>{age}</span><span className="round-arrow"><ArrowRight size={14} /></span></a>)}</div></div></section> }

const studioIdeas = [
  { name: 'Make', label: 'Little makers', color: 'pink', Icon: Paintbrush, detail: 'Paint, build and turn everyday materials into something wonderfully theirs.', prompt: 'Today’s little masterpiece', action: 'A paper garden made from bold colors, curious choices and tiny hands.' },
  { name: 'Explore', label: 'Curious thinkers', color: 'yellow', Icon: Compass, detail: 'Ask big questions, follow tiny clues and discover how the world works.', prompt: 'Today’s big discovery', action: 'A classroom nature hunt: noticing shapes, textures and colors all around us.' },
  { name: 'Move', label: 'Happy movers', color: 'green', Icon: Music2, detail: 'Sing, stretch and move together while confidence grows through play.', prompt: 'Today’s joyful moment', action: 'A music-and-movement circle where every child gets their own moment to shine.' },
]

function CreativeStudio() {
  const [active, setActive] = useState(0)
  const idea = studioIdeas[active]
  return <section className="creative-studio" id="creative-studio"><div className="creative-wrap"><div className="creative-photo"><Image src="/creative-studio.png" alt="Preschool children creating a colorful collage together" fill sizes="(max-width: 700px) 100vw, 50vw" /><span className="photo-note"><Sparkles size={15} /> Made by little hands</span></div><div className="creative-copy"><p className="section-kicker"><span />The Vel’s Kids way</p><p className="creative-overline">A little wonder, every day</p><h2>Little hands.<br /><em>Big ideas.</em></h2><p className="creative-intro">We make room for every kind of clever. Children learn best when they can imagine, experiment and make a joyful little mess.</p><div className="studio-tabs" role="tablist" aria-label="Explore our creative learning experiences">{studioIdeas.map(({ name, label, Icon }, index) => <button key={name} className={active === index ? 'studio-tab active' : 'studio-tab'} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><Icon /><span>{label}</span></button>)}</div><div className={`idea-card ${idea.color}`} role="tabpanel"><div><span className="idea-prompt">{idea.prompt}</span><p>{idea.action}</p></div><ArrowRight aria-hidden="true" /></div><a className="creative-link" href="#programs">See how we learn <ArrowRight size={15} /></a></div></div></section>
}

const dayMoments = [
  { time: '9:00', title: 'A warm hello', detail: 'Settle in, share a smile and choose a first activity.', Icon: Heart, color: 'pink' },
  { time: '10:00', title: 'Wonder & explore', detail: 'Stories, sensory play and little discoveries together.', Icon: Compass, color: 'yellow' },
  { time: '11:00', title: 'Create & move', detail: 'Make, build, sing and take ideas in new directions.', Icon: Paintbrush, color: 'green' },
  { time: '12:00', title: 'Share & shine', detail: 'Celebrate the day’s discoveries before heading home.', Icon: Sparkles, color: 'blue' },
]

function DailyRhythm() {
  return <section className="daily-rhythm"><div className="section-wrap rhythm-inner"><div className="rhythm-heading"><p className="section-kicker"><span />A day at Vel’s Kids</p><h2>Little routines.<br /><em>Big discoveries.</em></h2><p>A gentle rhythm gives every child the confidence to explore at their own pace.</p></div><div className="rhythm-track">{dayMoments.map(({ time, title, detail, Icon, color }, index) => <article className={`rhythm-stop ${color}`} key={time}><div className="rhythm-marker"><Icon /></div><span className="rhythm-time"><Clock3 /> {time} AM</span><h3>{title}</h3><p>{detail}</p>{index < dayMoments.length - 1 && <span className="rhythm-connector" aria-hidden="true" />}</article>)}</div></div></section>
}

const learningWorlds = [
  { title: 'Words & stories', detail: 'New words, favorite stories and little voices finding their confidence.', Icon: BookOpen, color: 'pink' },
  { title: 'Little discoveries', detail: 'Counting, sorting and asking “what if?” about the world around us.', Icon: Compass, color: 'blue' },
  { title: 'Build & imagine', detail: 'Open-ended materials that turn curious ideas into proud creations.', Icon: Blocks, color: 'yellow' },
  { title: 'Move & express', detail: 'Music, movement and joyful ways to share big feelings.', Icon: Music2, color: 'green' },
]

function LearningWorld() {
  return <section className="learning-world"><div className="learning-world-inner"><div className="learning-world-heading"><p className="section-kicker"><span />A whole world to discover</p><h2>Learning should feel<br /><em>like an adventure.</em></h2><p>Little lessons grow naturally from play, curiosity and the confidence to try.</p></div><div className="learning-world-grid">{learningWorlds.map(({ title, detail, Icon, color }, index) => <article className={`learning-card ${color}`} key={title}><span className="learning-card-number">0{index + 1}</span><span className="learning-card-icon"><Icon /></span><h3>{title}</h3><p>{detail}</p></article>)}</div><a className="learning-world-link" href="#programs">Explore our learning programs <ArrowRight size={16} /></a></div></section>
}

const schoolAddress = '90, Abdul Kalam Street, K.K. Nagar, Villupuram, Tamil Nadu 605602'
const schoolMapQuery = encodeURIComponent(schoolAddress)

function LocationMap() {
  return <section className="location-section" id="location"><div className="location-inner"><div className="location-copy"><p className="section-kicker"><span />Come find us</p><h2>A happy little<br /><em>place to grow.</em></h2><p>We&apos;re right here in Villupuram, ready to welcome your family. Stop by and see where the fun begins.</p><div className="location-address"><span className="location-pin"><MapPin /></span><div><strong>Vel&apos;s Kids Play School</strong><address>{schoolAddress}</address></div></div><a className="location-directions" href={`https://www.google.com/maps/search/?api=1&query=${schoolMapQuery}`} target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div><div className="location-map-frame"><iframe title="Map showing Vel's Kids Play School in Villupuram" src={`https://maps.google.com/maps?q=${schoolMapQuery}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>
}

function EnquiryForm() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const parentName = String(formData.get('parentName') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const program = String(formData.get('program') ?? '').trim()
    const note = String(formData.get('note') ?? '').trim() || 'I would like to know more about admissions.'
    const message = `Hello Vel's Kids Play School, I have an admission enquiry.\n\nParent/guardian: ${parentName}\nPhone: ${phone}\nProgram: ${program}\nMessage: ${note}`
    const whatsappUrl = `https://wa.me/917868000153?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setFormStatus('Your enquiry is ready in WhatsApp. Review the message there and press Send.')
  }

  return <section className="enquiry-section" id="enquiry"><div className="enquiry-inner"><div className="enquiry-copy"><p className="section-kicker"><span />A little hello goes a long way</p><h2>Let&apos;s find your child&apos;s <em>happy beginning.</em></h2><p>Tell us a little about what you&apos;re looking for. We&apos;ll prepare a WhatsApp message for you to review and send.</p><div className="enquiry-note"><MessageCircle /><span><strong>Sent with your say-so</strong><small>Your details only go to WhatsApp when you choose to send the message.</small></span></div></div><form className="enquiry-form" onSubmit={handleSubmit}><div className="enquiry-fields"><label>Parent or guardian name<input name="parentName" type="text" autoComplete="name" placeholder="Your name" maxLength={100} required /></label><label>Your WhatsApp number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 98765 43210" pattern="[0-9()+ -]{8,20}" title="Enter a phone number using digits, spaces, +, parentheses, or hyphens." required /></label><label className="enquiry-field-wide">Program of interest<select name="program" defaultValue="" required><option value="" disabled>Select a program</option>{programs.map(({ name, age }) => <option key={name} value={`${name} ${age}`}>{name} {age}</option>)}<option value="Not sure yet">I&apos;m not sure yet</option></select></label><label className="enquiry-field-wide">How can we help?<textarea name="note" placeholder="Ask us about admissions, timings, or anything else..." maxLength={500} rows={3} /></label></div><button type="submit" className="enquiry-submit"><MessageCircle size={17} /> Continue in WhatsApp <ArrowRight size={16} /></button><p className="enquiry-status" aria-live="polite">{formStatus}</p></form></div></section>
}

function VisitInvitation() {
  return <section className="visit-invitation"><div className="visit-invitation-inner"><div><p className="visit-kicker"><Sparkles size={14} /> A little hello can start something wonderful</p><h2>Come see where<br /><em>little ideas grow.</em></h2><p className="visit-description">Meet our caring team, explore the classrooms and find the right beginning for your child.</p></div><div className="visit-actions"><a className="button button-yellow" href="tel:07868000153"><Phone size={15} /> Talk to our team</a><span>Vel&apos;s Kids Play School · Villupuram</span></div><span className="visit-orbit visit-orbit-one" aria-hidden="true" /><span className="visit-orbit visit-orbit-two" aria-hidden="true" /></div></section>
}

function WhyUs() { return <section className="why section-wrap" id="why-us"><div className="why-content"><h2>Why Choose Us?</h2><div className="benefits-grid">{benefits.map(({ title, second, Icon, color }) => <div className="benefit" key={title}><span className={`icon-disc small ${color}`}><Icon /></span><p>{title}<br />{second}</p></div>)}</div></div><div className="why-photo"><div className="group-image image-frame"><Image src="/children-group.png" alt="Three happy preschool classmates in yellow uniforms" fill sizes="(max-width: 700px) 80vw, 22vw" /></div><div className="play-note"><Sun /><strong>Learning<br />Through<br />Play</strong><span className="rainbow" aria-hidden="true" /></div></div></section> }

function GalleryTestimonials() {
  const [active, setActive] = useState(0)
  const move = (direction: number) => setActive((active + direction + reviews.length) % reviews.length)
  return <section className="gallery-testimonials section-wrap" id="gallery"><div className="gallery-panel"><div className="section-heading-left"><h2>Our Gallery</h2><p>A glimpse into our joyful learning environment</p></div><div className="gallery-grid">{photos.map(({ src, alt }, index) => <a href={src} target="_blank" rel="noreferrer" className="gallery-photo" key={src} aria-label={`View photo ${index + 1}: ${alt}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 45vw, 14vw" /></a>)}</div></div><div className="testimonials" id="testimonials"><div className="section-heading-left"><h2>What Parents Say</h2></div><div className="review-wrap"><button className="carousel-arrow" onClick={() => move(-1)} aria-label="Previous testimonial"><ArrowLeft /></button><article className="review-card"><span className="parent-avatar"><Smile /></span><div><blockquote>“{reviews[active].quote}”</blockquote><p>– {reviews[active].name}</p></div></article><button className="carousel-arrow" onClick={() => move(1)} aria-label="Next testimonial"><ArrowRight /></button></div><div className="carousel-dots" aria-label="Testimonial pagination">{reviews.map((review, index) => <button key={review.quote} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={active === index ? 'true' : undefined} />)}</div></div></section>
}

function Footer() { return <footer className="footer" id="contact"><div className="footer-main"><div className="footer-brand"><Brand inverse /><p>Little hearts, bright futures.</p></div><div className="footer-contact"><p><MapPin /><span>90, Abdul Kalam Street,<br />K.K. Nagar, Villupuram,<br />Tamil Nadu 605602</span></p><a href="tel:07868000153"><Phone /><span>078680 00153</span></a><p><Sun /><span>Open · Closes 3:30 PM</span></p></div><div className="footer-social"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a></div></div><div className="footer-bottom"><nav aria-label="Footer navigation">{[['Home','#home'],['About Us','#about'],['Programs','#programs'],['Gallery','#gallery'],['Contact','#enquiry']].map(([name, href]) => <a key={name} href={href}>{name}</a>)}</nav><p>Designed with <Heart size={12} fill="currentColor" /> for little learners</p></div></footer> }

export default function PlayschoolSite() {
  return <><Header /><main><Hero /><FeatureBar /><About /><SectionWave tone="programs" /><Programs /><SectionWave tone="cream" flipped /><CreativeStudio /><SectionWave tone="rhythm" /><DailyRhythm /><LearningWorld /><WhyUs /><SectionWave tone="cream" flipped /><GalleryTestimonials /><LocationMap /><SectionWave tone="enquiry" /><EnquiryForm /><SectionWave tone="cream" flipped /><VisitInvitation /></main><Footer /></>
}
