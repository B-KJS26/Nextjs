import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';

export default function Home() {
  //라우터는 페이지 이동 도와줌
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/about")}>about</button>
      <Link href={"/profile"}>
          <button>profile</button>
      </Link>
    </div>
  )
}
