import { numberWithCommas } from "../utils/config";

export default function SliderInput({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle,
}) {
  return (
    <>
      <span className="title">{title}</span>
      {state && (
        <span className="title" style={{ textDecoration: "underline" }}>
          {underlineTitle}
        </span>
      )}

      <div>
        <input
          type="range"
          min={min}
          max={max}
          className="slider"
          value={state}
          onChange={onChange}
        />

        <div className="label">
          <label>{labelMin ?? numberWithCommas(min)}%</label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}%</label>
        </div>
      </div>
    </>
  );
}
