import backendLayers from '../assets/backend-layers.svg'

export function BackendVisual() {
  return (
    <div className="backend-visual" aria-hidden="true">
      <div className="visual-topline"><span>THE BACKEND LAB</span><span className="visual-cross">+</span></div>
      <div className="visual-stage">
        <span className="visual-axis">LOGIC MEETS STRUCTURE</span>
        <img className="backend-art" src={backendLayers} alt="" width="560" height="560" />
        <span className="visual-tag visual-tag--top">&#123; logic &#125;</span>
        <span className="visual-tag visual-tag--bottom">&lt; structure /&gt;</span>
      </div>
      <div className="visual-bottomline"><span><i />C# / .NET</span><span>BEHIND THE INTERFACE ↗</span></div>
    </div>
  )
}
