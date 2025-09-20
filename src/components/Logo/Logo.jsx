import logoImgSrc from "@/assets/images/hbank-logo.svg"

const Logo = () => {
  const title = "Home"

  return (
    <a className="logo" href="/bank-dashboard/" title={title} aria-label={title}>
      <img
        className="logo__image"
        src={logoImgSrc}
        alt=""
        width={99}
        height={32}
      />
    </a>
  )
}

export default Logo
