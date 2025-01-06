import { forwardRef } from 'react'

import { useTheme } from '@mui/material/styles'
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'

const defaultHeaderSX = {
  '& .MuiCardHeader-action': { mr: 0 },
}

const ContainerCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      headerSX = {},
      ...others
    },
    ref,
  ) => {
    const theme = useTheme()

    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          //   border: border ? "1px solid" : "none",
          borderColor: theme.palette.primary[200] + 25,
          ':hover': {
            boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit',
          },
          ...sx,
          width: '100%',
        }}
      >
        {title && (
          <CardHeader
            sx={{ ...headerSX, ...defaultHeaderSX }}
            title={darkTitle ? <Typography variant='h3'>{title}</Typography> : title}
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {/* {title && <Divider />} */}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {/* {!content && children} */}
      </Card>
    )
  },
)

ContainerCard.displayName = 'ContainerCard'

export default ContainerCard
