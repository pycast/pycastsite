import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl">Les petits outils !</h1>
      <ul className="list-disc pt-3 pl-5">
        <li>
          <Link href="tools/timecalculator">Time calculator</Link>
        </li>
        <li>
          <Link href="tools/stbfilmpicker">Film picker STB</Link>
        </li>
      </ul>
    </div>
  )
}