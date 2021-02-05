import Link from "next/link";

import Image from "../components/Image";
import Body1 from "../components/Typography/Body1";

import { SmoothScrollProvider } from "../contexts/SmoothScroll.context";

export default function IndexPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <div data-scroll-section>
        <Body1 />
      </div>
    </SmoothScrollProvider>
  );
}
