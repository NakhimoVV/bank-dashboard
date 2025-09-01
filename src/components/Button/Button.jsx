import './Button.scss'
import Icon from "@/components/Icon";
import clsx from "clsx";

const Button = (props) => {
  const {
    className,
    mode = '', // ''(default) | 'rounded' | 'card'
    type = 'button',
    href,
    target,
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = 'before', // 'before' | 'after'
    hasFillIcon
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href, target}
  const buttonProps = {type}
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={hasFillIcon}
    />
  )

  return (
    <Component
      className={clsx(className,"button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      <span className="button__label">{label}</span>
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button
