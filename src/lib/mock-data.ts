export type Author = { name: string; role: "Teacher" | "Member"; avatar: string };

export const teacher: Author = { name: "Prof. Marcus Hale", role: "Teacher", avatar: "MH" };
export const members: Author[] = [
  { name: "Sarah Chen", role: "Member", avatar: "SC" },
  { name: "David Okafor", role: "Member", avatar: "DO" },
  { name: "Lina Park", role: "Member", avatar: "LP" },
  { name: "Ahmed Rauf", role: "Member", avatar: "AR" },
  { name: "Maria Silva", role: "Member", avatar: "MS" },
];

export type Comment = { id: string; author: Author; text: string; time: string };
export type Post = {
  id: string;
  type: "lecture" | "trade" | "discussion";
  title: string;
  content: string;
  author: Author;
  time: string;
  comments: Comment[];
  pinned?: boolean;
};

export const forumPosts: Post[] = [
  {
    id: "p1",
    type: "lecture",
    pinned: true,
    title: "Lecture 14 — Understanding Market Trends & Cycles",
    content:
      "Today we dive into the four phases of every market cycle: accumulation, markup, distribution, markdown. Recognising the phase you are trading in is the single highest-leverage skill you can develop. I'll walk through three live charts in the recording attached below.",
    author: teacher,
    time: "2h ago",
    comments: [
      { id: "c1", author: members[0], text: "Brilliant breakdown — the distribution phase example finally clicked for me.", time: "1h" },
      { id: "c2", author: members[2], text: "Could you share the volume profile setup you used?", time: "42m" },
      { id: "c3", author: teacher, text: "Yes Lina — I'll post the template in #resources tonight.", time: "30m" },
    ],
  },
  {
    id: "p2",
    type: "trade",
    title: "Trade Idea — EUR/USD Long Setup",
    content:
      "Entry: 1.0820 · Stop: 1.0780 · TP1: 1.0890 · TP2: 1.0945. Reasoning: clean reclaim of the weekly demand zone with bullish RSI divergence on the 4H. Risk no more than 1% — copy at your own discretion.",
    author: teacher,
    time: "5h ago",
    comments: [
      { id: "c4", author: members[1], text: "In at 1.0822, thanks Prof.", time: "4h" },
      { id: "c5", author: members[4], text: "Scaled in half size — first time copy-trading 🙏", time: "3h" },
    ],
  },
  {
    id: "p3",
    type: "lecture",
    title: "Risk Management 101 — The 1% Rule",
    content:
      "Survival > returns. If you can stay in the game for 1,000 trades, edge does the rest. Position sizing worksheet attached.",
    author: teacher,
    time: "1d ago",
    comments: [
      { id: "c6", author: members[3], text: "Game changer. Cut my size in half this week.", time: "20h" },
    ],
  },
  {
    id: "p4",
    type: "trade",
    title: "Trade Idea — Gold (XAU/USD) Short",
    content: "Rejection at 2,395 with bearish engulfing on daily. Short 2,392 / SL 2,408 / TP 2,355.",
    author: teacher,
    time: "2d ago",
    comments: [],
  },
];

export type LoungeMessage = { id: string; author: Author; text: string; time: string };
export const loungeMessages: LoungeMessage[] = [
  { id: "l1", author: members[0], text: "Morning everyone ☕ what are we watching today?", time: "08:14" },
  { id: "l2", author: members[1], text: "DXY looking heavy, might be a green day for majors.", time: "08:16" },
  { id: "l3", author: members[2], text: "Anyone following gold? That rejection yesterday was textbook.", time: "08:18" },
  { id: "l4", author: members[4], text: "Took the EU long from the forum — already 20 pips up 🙌", time: "08:22" },
  { id: "l5", author: members[3], text: "Nice. I'm sitting on hands until London open.", time: "08:25" },
  { id: "l6", author: members[0], text: "Smart. Patience pays.", time: "08:26" },
];

export type DM = { id: string; from: "me" | "them"; text: string; time: string };
export type Conversation = { id: string; with: Author; preview: string; unread: number; messages: DM[] };

export const conversations: Conversation[] = [
  {
    id: "d1",
    with: teacher,
    preview: "Happy to review your journal — send it over.",
    unread: 1,
    messages: [
      { id: "m1", from: "me", text: "Hi Prof, would you mind reviewing my trade journal this week?", time: "Mon 10:02" },
      { id: "m2", from: "them", text: "Happy to review your journal — send it over.", time: "Mon 10:14" },
    ],
  },
  {
    id: "d2",
    with: members[0],
    preview: "Yes! Same setup I took. Let's compare notes.",
    unread: 0,
    messages: [
      { id: "m3", from: "me", text: "Did you take the EU long?", time: "Tue 09:30" },
      { id: "m4", from: "them", text: "Yes! Same setup I took. Let's compare notes.", time: "Tue 09:33" },
    ],
  },
  {
    id: "d3",
    with: members[2],
    preview: "Thanks for the chart 🙏",
    unread: 0,
    messages: [
      { id: "m5", from: "them", text: "Thanks for the chart 🙏", time: "Yesterday" },
    ],
  },
];
