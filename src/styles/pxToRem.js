export const pxToRem=(valuePx)=>{

  const Onerem=16
  let transformValue=valuePx/Onerem
  let valueInRem=`${transformValue}rem`
  
  return valueInRem
}
