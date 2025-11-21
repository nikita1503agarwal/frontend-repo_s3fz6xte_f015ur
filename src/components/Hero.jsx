export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(800px_circle_at_80%_0%,rgba(99,102,241,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
          Unlock Exclusive iGaming Bonuses
        </h1>
        <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
          Your hub for verified codes and the best offers from top platforms. Claim your bonus in seconds.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#bonuses" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-3 font-semibold shadow">
            Explore Bonuses
          </a>
          <a href="#articles" className="bg-white/10 hover:bg-white/20 text-white rounded-md px-6 py-3 font-semibold shadow border border-white/10">
            Read Guides
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 max-w-xl mx-auto text-blue-100 text-sm gap-6">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="font-semibold text-white">100K+</p>
            <p>Bonuses Claimed</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="font-semibold text-white">50+</p>
            <p>Partners</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="font-semibold text-white">4.9/5</p>
            <p>User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
