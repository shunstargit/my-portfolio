import works from '../data/works.json';

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>あなたの名前</h1>
      <p style={{ marginTop: "1rem" }}>AIと音楽で遊ぶクリエイター</p>
      <p>作品を紹介するポートフォリオサイトです。</p>

      {/* SNSリンク */}
      <div style={{ marginTop: "1rem" }}>
        <a href="https://x.com/yourname" target="_blank">X（旧Twitter）</a><br />
        <a href="https://github.com/yourname" target="_blank">GitHub</a><br />
        <a href="https://youtube.com/@yourchannel" target="_blank">YouTube</a>
      </div>

      {/* 作品一覧表示（カード型・正方形画像・リンク付き） */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>作品一覧</h2>
      <ul style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        listStyle: "none",
        padding: 0
      }}>
        {works.map((work) => (
          <a
            key={work.id}
            href={`/works/${work.id}`}
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <li style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.2s",
              cursor: "pointer"
            }}>
              <div style={{
                width: "100%",
                aspectRatio: "1 / 1",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>{work.title}</h3>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                  {work.category}｜{work.date}
                </p>
                <p style={{ margin: "0.5rem 0" }}>{work.description}</p>
                <div>
                  {work.links?.YouTube && (
                    <span>▶ YouTube</span>
                  )}
                  {work.links?.Spotify && (
                    <><br /><span>🎵 Spotify</span></>
                  )}
                  {work.links?.GitHub && (
                    <><br /><span>💻 GitHub</span></>
                  )}
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </main>
  );
}
