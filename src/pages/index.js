import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
export default function Home() {
  return (
    <Layout>
      <Header />
      <svg>
        <g id="Hero-updates" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="hg_hero_03-copy-14" transform="translate(0.000000, -464.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="Group-8">
              <g id="Group-6-Copy-2">
                <path d="M0,795 L1920,795 L1920,464.125142 C1708.31893,661.760464 1444.65967,760.578125 1129.02222,760.578125 C825.699219,760.578125 753.267544,672.727476 421.292969,646.70978 C253.634115,633.569927 113.203125,661.668661 0,731.005984 L0,795 Z" id="Bottom-curve-xl" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h1 class="text-4xl text-yellow-200">Dale Greve <span aria-label="Hand" role="img">✋</span></h1>
      <h2>A web developer located in Michigan.</h2>
      <p class="text-white text-2xl">Specializing in creating Wordpress sites that fit the unique style & message to best reach your audience.</p>
    </Layout >
  )
}
