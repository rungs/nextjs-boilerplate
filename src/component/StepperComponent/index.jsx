import PropTypes from 'prop-types'
import { Step, Stepper, StepLabel, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'

const StepperComponent = ({
  steps = [],
  activeStep = 0,
  customConnector = null,
  customStepComponent = null,
  translate = false,
  multilingual = false,
}) => {
  const { lang } = useSelector(state => state.lang)
  const translator = useSelector(selectTranslations)
  const ConnectorComponent = { ...customConnector }

  if (steps.length === 0) {
    return (
      <Grid container>
        <Grid item xs={12} sx={{ color: 'red', textAlign: 'center' }}>
          Error !! Invalid step collection
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        {...(customConnector && { connector: <ConnectorComponent /> })}
      >
        {steps.map(item => {
          return (
            <Step key={item.id}>
              <StepLabel
                {...(item.icon && { icon: <item.icon /> })}
                {...(customStepComponent && { StepIconComponent: customStepComponent })}
              >
                {multilingual
                  ? item.label[lang.toLowerCase()]
                  : translate
                  ? translator[item.label]
                  : item.label}
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </>
  )
}

StepperComponent.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType, // optional icon object
    }),
  ).isRequired,
  activeStep: PropTypes.number, // number base zero
  customConnector: PropTypes.elementType,
  customStepComponent: PropTypes.elementType, // render function of step component
}

export default StepperComponent
