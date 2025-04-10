function CrossLine({ size = "2", borderDetail, color = "gray-300" }) {
  return (
    <p
      className={`border-b-${size} border-${borderDetail} border-${color} mt-[1.25rem] mb-4`}
    ></p>
  );
}

export default CrossLine;
