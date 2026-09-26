# X article: trapdoor

> Replace `$TICKER`, `[CONTRACT ADDRESS]` and `[SITE URL]` before posting.
> Suggested cover image: the hero of the site ("Every funded Bitcoin wallet. Decoded with fees.").

---

## Title

**903 BTC is locked behind 77 unknown keys. We're pointing trading fees at it.**

---

## Body

In January 2015, someone funded 160 Bitcoin addresses in a single transaction.

It wasn't a mistake. Each address hides its private key inside a range that doubles in size from one puzzle to the next. Puzzle #1 fits in 1 bit, #2 in 2 bits, and so on up to #160. It's a public measure of how much cracking power the world really has, and whoever finds a key keeps the coins.

Eleven years later, every puzzle up to #70 has been solved. 77 remain open, and together they still hold **903 BTC**.

That's where **trapdoor** comes in.

### Five puzzles are not like the others

Normally an address tells you nothing. It's just a hash of a public key, so the only option is brute force: guess a key, hash it, compare, repeat.

But in May 2019 the creator moved 1,000 satoshis out of puzzles **#140, #145, #150, #155 and #160**. Spending from an address publishes its public key, and that changes the maths completely.

With a public key you can run **Pollard's Kangaroo**. Two "herds" hop through the keyspace, and the moment they land on the same point the private key falls out of the difference. The work drops to roughly **the square root** of the range.

For comparison:
- **#71**, blind: about 5.9 × 10²⁰ hashes, and it pays 7.1 BTC.
- **#140**, computable: about 9.6 × 10²⁰ operations, in a range 2⁶⁹ times bigger, and it pays **14 BTC**.

This isn't theory. In July 2026, #135 fell exactly this way, after about five months on 200 GPUs. #140 is the next rung on the ladder, and it's where trapdoor starts.

### How it works

Every step is something you can check yourself.

1. **Trades happen.** Every trade of $TICKER on Robinhood Chain pays a fee.
2. **Fees pool in public.** They go to one project wallet that anyone can watch.
3. **Fees become GPU hours.** That wallet rents compute at market price. We don't build anything.
4. **Compute takes a slice.** Each machine gets its own part of the target range and walks it with Kangaroo.
5. **A collision ends it.** If a key drops out, the BTC moves on-chain in front of everyone at once.

The only thing that matters is how much compute is running. A fixed budget runs out. A fee stream keeps paying for compute as long as people trade.

### Why it can be trusted

- **The targets are public.** All 77 addresses are on the board on the site, each with a live balance check from a public Bitcoin node.
- **The wallet is public.** Fees in, compute out, both on-chain.
- **The fleet reports itself.** Rigs publish their own readings to the site. If a number can't be verified, the site doesn't show it.
- **A solve can't be faked.** If #140 is cracked, the 14 BTC moves from `1QKBaU6WAeycb3DbKbLBkX7vJiaS8r42Xo`. You won't need us to tell you.

The site also has a fee engine simulator. Set a trading volume, fee rate and GPU price, and it shows how many GPUs that buys and how long a given target would take. Play with it before believing anyone, including us.

### The honest part

A hundred GPUs on #140 would expect to need decades. Ten thousand would expect months. Expected work is an average, not a deadline, and anyone in the world can solve a puzzle before us.

trapdoor promises no solve, no payout and no date. It's a public experiment in turning trading activity into raw compute and pointing it at the hardest open bounty in Bitcoin.

**77 targets. 903 BTC. One public wallet. Watch it.**

🔗 [SITE URL]
📄 CA: [CONTRACT ADDRESS]
𝕏 @Trygatepost

*Not financial advice. Puzzle bounties can be claimed by anyone, at any time.*

---

## Short post to share the article

> 903 BTC sits behind 77 Bitcoin puzzles nobody has cracked.
>
> 5 of them leaked their public key in 2019, which makes them computable, not just guessable.
>
> trapdoor turns $TICKER trading fees into GPU hours and points them at #140 (14 BTC). Everything happens in public.
>
> Full breakdown 👇
