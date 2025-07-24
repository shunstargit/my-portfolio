import Link from 'next/link'; // ✅ 正しく冒頭に import
import works from '../../../data/works.json';

export default function WorkDetail({ params }) {
  const work = works.find((item) => item.id === params.id);

  if (!work) {
    return <div style={{ padding: "2rem" }}>作品が見つかりませんでした。</div>;
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{work.title}</h1>
      <p style={{ color: "#555" }}>{work.category}｜{work.date}</p>

      <div style={{
        width: "100%",
        maxWidth: "500px",
        aspectRatio: "1 / 1",
        backgroundColor: "#f0f0f0",
        marginTop: "1rem"
      }}>
        <img
          src={work.thumbnail}
          alt={work.title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <p style={{ marginTop: "1rem" }}>{work.description}</p>

      <div style={{ marginTop: "1rem" }}>
        <h3>外部リンク</h3>
        {work.links?.YouTube && (
          <div><a href={work.links.YouTube} target="_blank" rel="noopener noreferrer">▶ YouTube</a></div>
        )}
        {work.links?.Spotify && (
          <div><a href={work.links.Spotify} target="_blank" rel="noopener noreferrer">🎵 Spotify</a></div>
        )}
        {work.links?.GitHub && (
          <div><a href={work.links.GitHub} target="_blank" rel="noopener noreferrer">💻 GitHub</a></div>
        )}
      </div>

      {/* ✅ 修正済みの戻るリンク */}
      <div style={{ marginTop: "2rem" }}>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          トップに戻る
        </Link>
      </div>
    </main>
  );
}
