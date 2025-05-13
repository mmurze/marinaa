const development = process.env.NODE_ENV === "development"
module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["defi.choise.com", "cms.choise.com", "webinar.choise.com"]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  env: {
    DIRECTUS_API: "https://cms.choise.com/items",
    DIRECTUS_IMAGE: "https://cms.choise.com/assets",
    DEFI_API: "https://defi.choise.com/api",
    GoogleMailAccount: "no-reply@choise.com",
    GoogleClientId: "995449454783-uvtmlsdvd1867589kcnvd6lm49rou92o.apps.googleusercontent.com",
    GoogleClientSecret: "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",
    GoogleRefreshToken: "1//04unBEKj3QeazCgYIARAAGAQSNwF-L9IrEoDxSrebDEmI9DCXR0hYOK-RWFBP6VjmH8ZIEyGVPV9j-WhGSz80MqT_OnIc7s6Xn1M",
    GoogleAccessToken: "ya29.A0ARrdaM_tmgKMNn18PmCtADhguUXEYRcxURoLeW-DDWPz4C-GaoVh5esA_6C_iYDppq1TGc3KhKjfYFfrQhjf1LaqfTVuxUiJ6gytAm7UAjnS3exdafxWjL4kzqciMS_m3vtzCKBppCoNsgoJKp3TBY9gUAA9",
    TOTAL_MINT: 1000,
    INFURA_ID: "aa850c2d4fda45c99c6be021c060bb1d",
    CONTRACT: development ? "0x32dadc8ce281e331f6bacea18d202f8553c6e908" : "0xCe90D38B084Aad57bc26C5C66F377d6DF7882846",
    MINT_PRICE: development ? 0.005 : 0.41,
    NFT_API: "https://cho-nft-collection.com",
    ADMIN_ADDRESS: [
      "0x2f1951518637114801b86aace7e9e253397bb020",
      "0xb1d0466e99fddf200c5055b0f5cad37ff2689c34",
      "0x8Af1D58526AAEDeEE9BB47d0AFD0Cb3c066A4058",
      "0x996f0D106398d01CAa755cDac68C13db1c16E6b7",
      "0xFD56980B993caD82cb6b9C7eb64f7FD37C039C05",
      "0xf9f306ffBe785b41215f05daABFD55FaEEa48e86",
      "0x54405FC6763615ea6Ad3Eb8e413793BAc01E2cE3"
    ]
  },
  async redirects() {
    return [
      {
        source: "/tokenomics",
        destination: "/404",
        permanent: true
      },
      {
        source: "/nft/profile",
        destination: "/profile",
        permanent: true
      },
      {
        source: "/news/updates/xena_algos_strategies_performance_overview",
        destination: "/news",
        permanent: true
      },
      {
        source: "/news/updates/crypterium-is-partnering-with-xena-algos-and-launches-an-exclusive-one-week-sale",
        destination: "/news",
        permanent: true
      },
      {
        source: "/news/updates/algos-strategies-performance-overview",
        destination: "/news",
        permanent: true
      },
      {
        source: "/news/buy-crypto/make-your-bitcoin-work-earn-2600-with-xen-assets-at-crypterium-algos",
        destination: "/news",
        permanent: true
      },
      {
        source: "/news/categories/:id",
        destination: "/news/:id",
        permanent: true
      },
      {
        source: "/deposits",
        destination: "/interest-accounts",
        permanent: true
      }
    ]
  }
}
