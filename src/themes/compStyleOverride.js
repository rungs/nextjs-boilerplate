export default function componentStyleOverrides(theme) {
  const bgColor = theme.colors?.grey50
  return {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#db3131',
          '&$error': {
            color: '#db3131',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '24px',
        },
        title: {
          fontSize: '1.125rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.colors?.orangeDark,
            // color: "white",
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack,
            },
            '& .MuiListItemIcon-root': {
              // color: theme.menuSelected,
              color: theme.colors?.orangeDark,
            },
          },
          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            // color: theme.menuSelected,
            color: theme.colors?.orangeDark,
            '& .MuiListItemIcon-root': {
              // color: theme.menuSelected,
              color: theme.colors?.orangeDark,
            },
          },
        },
        // gutters: {
        //   "&.Mui-selected": {
        //     color: "white",
        //     backgroundColor: theme.menuSelectedBack,
        //     "&:hover": {
        //       backgroundColor: theme.menuSelectedBack,
        //     },
        //     "& .MuiListItemIcon-root": {
        //       color: theme.menuSelected,
        //     },
        //   },
        // },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextPrimary,
            fontSize: '1rem',
          },
          '& .Mui-disabled': {
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
          '& .Mui-disabled': {
            backgroundColor: '#f0f0f0 !important',
          },
          '& .error': {
            border: '2px solid red',
          },
        },
        input: {
          fontWeight: 200,
          background: 'white',
          '&#pext4-select-label': {
            background: theme.colors.success200,
          },
          '&#fext4-select-label': {
            background: theme.colors.success200,
          },
          '&#inf-doc-desc-select-label': {
            background: theme.colors.success200,
          },
          '&#inf-doc-type-select-label': {
            background: theme.colors.success200,
          },
          '&#INF_CRCARD': {
            background: theme.colors.success200,
          },
          '&#INF_PRMM_DATE': {
            background: theme.colors.success200,
          },
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme?.colors?.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          background: 'white',
        },
        root: {
          '& .MuiAutocomplete-popper': {
            borderRadius: '20px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          },
          '& div.Mui-disabled': {
            background: '#f0f0f0',
          },
        },
        paper: {
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#f44336',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-columnHeaders': {
            maxHeight: 'none !important',
          },
        },
      },
    },
  }
}
