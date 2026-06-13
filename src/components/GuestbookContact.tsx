import React, { useState, useEffect } from 'react';
import { GuestbookEntry } from '../types';
import { Mail, MessageSquare, Send, CheckCircle2, ThumbsUp, UserCheck, Code2, AlertTriangle } from 'lucide-react';

const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'g-1',
    name: 'Sarah Jenkins',
    message: 'Inspected your GitInsight analyzer codebase – very clean structure! I am a recruiting manager looking for react engineers. Let us schedule a chat.',
    timestamp: '2026-06-11 14:32',
    role: 'Recruiter'
  },
  {
    id: 'g-2',
    name: 'Alex Rivera',
    message: 'The Sandbox emulator modal is an elite touch. Definitely stealing this layout idea for my next component. Best of luck on the search, Keyur!',
    timestamp: '2026-06-10 09:12',
    role: 'Developer'
  },
  {
    id: 'g-3',
    name: 'Vikram Sharma',
    message: 'Incredible work on EcoTrack, the throughput numbers are really impressive. Proud to have collaborated with you on our hackathon!',
    timestamp: '2026-06-08 19:40',
    role: 'Friend'
  }
];

export function GuestbookContact() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [visitorRole, setVisitorRole] = useState('Recruiter');

  // Contact form state
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  // Load guestbook from localstorage
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-guestbook');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        setEntries(INITIAL_GUESTBOOK);
      }
    } else {
      setEntries(INITIAL_GUESTBOOK);
      localStorage.setItem('portfolio-guestbook', JSON.stringify(INITIAL_GUESTBOOK));
    }
  }, []);

  // Update storage
  const saveEntries = (newEntries: GuestbookEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('portfolio-guestbook', JSON.stringify(newEntries));
  };

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `g-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
      role: visitorRole
    };

    const updated = [newEntry, ...entries];
    saveEntries(updated);
    setName('');
    setMessage('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError('');

    if (!contactEmail.trim() || !contactMessage.trim()) {
      setContactError('Please supply both your email address and message contents.');
      return;
    }

    if (!contactEmail.includes('@')) {
      setContactError('Please supply a valid email address structure.');
      return;
    }

    setContactSubmitted(true);
    setContactEmail('');
    setContactSubject('');
    setContactMessage('');

    setTimeout(() => {
      setContactSubmitted(false);
    }, 4000);
  };

  return (
    <section id="guestbook" className="py-20 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-[#262626] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold mb-3">
            <MessageSquare size={12} />
            <span>Interactive Interaction Station</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Guestbook & Contact Channel
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 mt-3 text-base font-light">
            Drop an email to collaborate on projects, or sign the interactive live guestbook to leave a permanent mark on my portfolio feed!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Guestbook Section */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-[#121212]/30 rounded-2xl border border-slate-100 dark:border-[#262626] p-6 sm:p-8 space-y-8">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest block font-mono">
                Visitor Guestbook Feed
              </span>
              <h3 className="font-sans font-bold text-lg text-slate-805 dark:text-slate-100">
                What colleagues are saying
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleGuestbookSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="guestbook-name" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Your Name/Alias
                  </label>
                  <input
                    type="text"
                    id="guestbook-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Leslie Knope"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-neutral-200 text-xs font-semibold focus:outline-hidden focus:border-blue-500/50"
                    maxLength={30}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="guestbook-role" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Your Persona Role
                  </label>
                  <select
                    id="guestbook-role"
                    value={visitorRole}
                    onChange={(e) => setVisitorRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-neutral-200 text-xs font-semibold focus:outline-hidden focus:border-blue-500/50 cursor-pointer"
                  >
                    <option value="Recruiter">Recruiter / Talent</option>
                    <option value="Developer">Software Developer</option>
                    <option value="Friend">Peer & Friend</option>
                    <option value="Visitor">General Guest</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="guestbook-msg" className="text-xs font-bold text-slate-500 dark:text-slate-400 font-sans">
                  Quick Message
                </label>
                <textarea
                  id="guestbook-msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Keyur! Inspected your projects..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-neutral-300 dark:text-neutral-200 text-xs font-semibold focus:outline-hidden focus:border-blue-500/50 resize-none font-mono"
                  maxLength={160}
                  required
                />
              </div>

              <button
                type="submit"
                id="submit-guestbook-btn"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl accent-gradient text-white text-xs font-semibold hover:opacity-90 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Send size={13} />
                <span>Sign Guestbook</span>
              </button>
            </form>

            {/* List entries */}
            <div className="max-h-[300px] overflow-y-auto space-y-4 pr-1 scrollbar-thin scrollbar-thumb-slate-200">
              {entries.map((ent) => (
                <div
                  key={ent.id}
                  className="bg-white dark:bg-[#0a0a0a] p-4 rounded-xl border border-slate-100 dark:border-[#262626] space-y-2"
                >
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center space-x-1.5">
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{ent.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-[#121212] dark:text-neutral-400 border dark:border-[#262626]">
                        {ent.role}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">{ent.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-60) dark:text-neutral-300 leading-relaxed font-mono">
                    "{ent.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Direct Section */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-[#121212]/30 rounded-2xl border border-slate-100 dark:border-[#262626] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-blue-505 dark:text-blue-400 uppercase tracking-widest block font-mono">
                Direct Communication Node
              </span>
              <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100">
                Send a Secure Dispatch
              </h3>
            </div>

            {contactError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 rounded-xl flex items-center space-x-2 text-rose-700 dark:text-rose-400 text-xs">
                <AlertTriangle size={15} />
                <span>{contactError}</span>
              </div>
            )}

            {contactSubmitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-100 dark:border-emerald-900/20 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 animate-fade-in py-12">
                <CheckCircle2 size={36} className="text-emerald-505 dark:text-emerald-400" />
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">Design Dispatch Broadcasted!</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 px-4 leading-relaxed font-light">
                  The signal has arrived in my incoming cache. I will address this prompt in under 24 hours. Thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Your Professional Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-neutral-250 text-xs font-semibold focus:outline-hidden focus:border-blue-500/50"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 font-sans">
                    Collaboration Agenda
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="E.g., Contract Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-neutral-300 dark:text-neutral-250 text-xs font-semibold focus:outline-hidden focus:border-blue-500/50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-500 dark:text-slate-400 font-sans">
                    Detailed Proposal/Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Let's build a secure system together..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-neutral-300 dark:text-neutral-250 text-xs font-semibold focus:outline-hidden focus:border-blue-500/50 resize-none font-mono"
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="send-dispatch-btn"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl accent-gradient text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:opacity-90 transition-all cursor-pointer"
                >
                  <Send size={13} />
                  <span>Send Dispatch</span>
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-100 dark:border-[#262626]/60 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-605 dark:text-slate-350">
                <Mail size={13} className="text-blue-500 dark:text-blue-400" />
                <span>chanchadkeyur2001@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GuestbookContact;
