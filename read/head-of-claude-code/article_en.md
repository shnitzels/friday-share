# Head of Claude Code: What Happens After Coding Is Solved

## Boris Cherny, creator of Claude Code at Anthropic, explains why coding is fundamentally solved — and what comes next for software engineers

Boris Cherny didn't set out to revolutionize software engineering. About a year ago, he built a simple terminal-based AI coding tool as a quick internal hack at Anthropic. Today, that hack — Claude Code — is responsible for 4% of all public GitHub commits, according to SemiAnalysis, with daily active users doubling in just the past month. In a fascinating and wide-ranging conversation on Lenny's Podcast, Cherny makes a bold claim that's sending shockwaves through the tech industry: coding, as we've known it for decades, is fundamentally solved. The urgent question now is what comes after.

## From Quick Hack to Industry Standard

The origin story of Claude Code is itself a lesson in product development. Cherny built the first prototype as a terminal-based tool — no fancy GUI, no elaborate IDE integration. Just a command-line interface where developers could talk to an AI agent that could read, write, and modify code directly in their projects.

What happened next surprised even Cherny. Developers didn't just try it — they adopted it as their primary workflow. The growth was explosive and organic. Claude Code went from an internal experiment to a product that now represents a measurable share of all open-source development on GitHub. The daily active user count has been doubling month over month, a growth rate that puts it among the fastest-growing developer tools in history.

The key insight? Developers didn't want another autocomplete tool. They wanted a colleague — an agent that could understand context, navigate codebases, run tests, fix bugs, and execute multi-step tasks autonomously. Claude Code delivered that, and the market responded.

## The Counterintuitive Product Principles

One of the most fascinating aspects of Cherny's approach to building Claude Code was the set of counterintuitive product principles that guided its development. Rather than following the conventional playbook of building polished, feature-rich interfaces, the team embraced minimalism and speed.

The terminal-based approach, which many initially saw as a limitation, turned out to be a strength. It forced the team to focus on the quality of the AI interaction rather than the chrome around it. It also meant that Claude Code could integrate seamlessly into existing developer workflows without requiring developers to learn a new IDE or switch their tools.

Another counterintuitive principle: underfunding teams while giving them unlimited tokens. Cherny explained that by keeping teams small and resource-constrained in terms of headcount, but giving them unlimited access to AI tokens, teams were forced to leverage AI aggressively in their own work. This created a virtuous cycle — the teams building AI tools were also the most intensive users of AI tools, which gave them deep insight into what worked and what didn't.

This approach stands in stark contrast to how most tech companies operate, where large teams with generous budgets often produce bloated, slow-moving products. At Anthropic, the constraint bred creativity and speed.

## Why Coding Is "Solved"

Cherny's central thesis is provocative but increasingly hard to argue against: the fundamental act of translating human intent into working code is a solved problem. Not perfectly solved — not yet — but solved in the same way that machine translation is solved. It works well enough, often enough, that the bottleneck has shifted.

To understand what "solved" means in this context, consider the evidence. Spotify recently announced that its best developers haven't written a single line of code since December, relying entirely on AI agents to produce their software. Claude Code alone handles 4% of public GitHub commits. Companies across the industry are reporting that AI-generated code now makes up 30-60% of their total codebase.

The implications are profound. For decades, the software industry's bottleneck has been the translation layer — taking what humans want and converting it into instructions a computer can execute. That translation required years of training, deep expertise in programming languages, and constant learning as frameworks and paradigms evolved. Now, AI can handle that translation at superhuman speed and, in many cases, with fewer bugs than human developers.

But Cherny is quick to point out that "coding is solved" doesn't mean "software engineering is solved." There's a crucial difference. Coding is the mechanical act of writing syntactically correct, functional code. Software engineering encompasses architecture, system design, understanding user needs, making tradeoffs, managing complexity, and ensuring reliability at scale. The latter is far from solved — and may become even more important as AI takes over the former.

## The Bitter Lesson Applied to Software

Cherny references Rich Sutton's famous essay "The Bitter Lesson," which argues that in the history of artificial intelligence, approaches that leverage massive computation consistently outperform approaches that try to encode human knowledge directly. The "bitter" part is that this lesson has been learned repeatedly, yet researchers keep trying to build in human expertise rather than letting models learn from data.

Applied to software development, the bitter lesson suggests that trying to build highly specialized, hand-tuned coding assistants will ultimately lose to general-purpose AI agents that improve with scale. Claude Code's success validates this — rather than building elaborate heuristics for how to edit code, the team focused on giving a powerful language model the right tools (file reading, writing, terminal access) and let it figure out the best approach.

This philosophy extends to how Cherny thinks about the future. As AI models continue to improve — and they're improving at an astonishing rate — the capabilities of tools like Claude Code will expand far beyond what purpose-built solutions can match.

## The Cursor Detour: Two Weeks and Back

One of the most candid moments in the podcast is when Cherny discusses his brief departure from Anthropic to join Cursor, the AI-powered code editor that has itself experienced explosive growth (reaching $300M in annual recurring revenue). Cherny left Anthropic for Cursor, only to return after just two weeks.

While he's diplomatic about the experience, the implication is clear: Cherny realized that Anthropic's position — building the foundational AI models themselves — offered something that application-layer companies couldn't match. When you're at the company creating the intelligence, you have a fundamentally different vantage point on what's possible and what's coming next. The models are getting better at a pace that external builders can't fully anticipate, and being on the inside gives you the ability to shape products around capabilities that don't yet exist publicly.

This decision speaks to a broader dynamic in the AI industry. As foundational models become more capable, the value may shift from the application layer back to the model layer. The best AI products may ultimately come from the companies that build the best AI.

## Three Principles for Every New Team Member

Cherny shared three principles he communicates to every new person joining his team, offering a window into the culture that produced Claude Code:

**First: Taste matters more than technique.** In an era where AI can write any code you describe, the ability to discern what's good — what's elegant, what's maintainable, what truly serves the user — becomes the differentiating skill. Technical execution is increasingly automated; taste is not.

**Second: Move fast and embrace imperfection.** Claude Code itself was born from a quick hack, not a carefully planned initiative. In the AI era, the landscape changes so rapidly that spending months perfecting a product means shipping something designed for yesterday's capabilities. Speed of iteration beats perfection of execution.

**Third: Use AI for everything.** This isn't just about dogfooding your own product. It's about developing an intuition for what AI can and cannot do, which changes weekly. Team members who use AI extensively develop a calibrated sense of its capabilities that's impossible to get from reading benchmarks or papers.

## Engineers as Managers of AI Agents

Perhaps the most transformative insight from the conversation is Cherny's vision of what software engineers are becoming: managers of AI agents. Rather than writing code line by line, engineers are increasingly directing AI agents — describing what needs to be built, reviewing what the AI produces, providing feedback, and orchestrating multiple AI workflows simultaneously.

This is already happening with Claude Code's Cowork feature, which allows Claude to work on tasks in the background while the developer focuses on other things. The developer sets direction, checks in periodically, and course-corrects as needed — much like a manager overseeing a team of junior developers.

The latent demand for this kind of tool was enormous. Developers didn't know they wanted it until they experienced it, but once they did, the old way of working felt impossibly slow. It's like going from typing every letter of a document to dictating it to a skilled assistant who understands your intent.

This shift has implications that go far beyond the tech industry. If coding is solved, then the barrier to building software drops dramatically. Domain experts — doctors, lawyers, teachers, designers — can increasingly build their own tools without learning to code. The bottleneck moves from "can you code?" to "do you know what to build?"

## Practical Tips for Getting the Most Out of Claude Code

Cherny offered several practical tips for developers looking to maximize their effectiveness with Claude Code and Cowork:

**Give Claude Code full context.** The more it understands about your project — its structure, conventions, goals — the better its output. Use CLAUDE.md files, point it at documentation, and don't be afraid to give it lengthy instructions.

**Start with hard problems.** Many developers start by using AI for boilerplate or simple tasks. But Claude Code's biggest value is on hard problems — complex refactors, unfamiliar codebases, architectural decisions. Push it further than you think you can.

**Trust but verify.** Let Claude Code do its thing without micromanaging, then review the output. The developers who get the most value are those who resist the urge to intervene at every step and instead focus on evaluating the final result.

**Use Cowork for parallel workstreams.** Don't just use Claude Code for one task at a time. Spin up multiple Cowork sessions for different tasks and switch between them, reviewing and directing as needed. This is where the "manager of AI agents" paradigm really kicks in.

## What Comes After Coding?

The question Cherny keeps returning to — the one implicit in the podcast's title — is what happens when coding is no longer the bottleneck. If anyone can build software, what determines who builds the best software?

The answer, Cherny suggests, is the same thing that has always mattered in great products: understanding people. Empathy, taste, judgment, creativity — these human qualities become more valuable, not less, when the technical execution is handled by AI. The best product builders of the future won't be defined by their ability to write algorithms but by their ability to understand what people need and envision solutions that are elegant, useful, and delightful.

This echoes a historical pattern. When the printing press democratized the production of books, the value shifted from scribes who could copy text to authors who could write things worth reading. When photography automated image capture, the value shifted from technical skill in painting to artistic vision. Coding is going through the same transition.

For today's software engineers, the message is clear: invest in the skills that AI can't replicate. Learn to be a great product thinker. Develop your taste. Understand your users deeply. These are the skills that will define the next generation of builders — and they have nothing to do with knowing the syntax of any programming language.

## The Road Ahead

Cherny's vision of the future is both exciting and humbling. Exciting because the barriers to building technology are falling faster than ever, opening up creation to billions of people who were previously locked out. Humbling because the skills that many engineers have spent decades honing — the intricate knowledge of languages, frameworks, and tooling — are being commoditized at breathtaking speed.

But this isn't a story of loss. It's a story of transformation. Just as the calculator didn't eliminate the need for mathematicians — it freed them to tackle harder problems — AI coding tools won't eliminate the need for software engineers. They'll transform what it means to be one. The engineers who thrive will be those who embrace AI as a force multiplier, who see themselves not as coders but as builders, and who focus relentlessly on the human side of technology.

Claude Code, born from a quick hack in a terminal window, is one of the earliest and most powerful signals of this transformation. And if Boris Cherny is right, we're still only at the very beginning.
