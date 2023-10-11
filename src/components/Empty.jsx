function Empty({ message }) {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center text-textColor">
      <h2 className="text-2xl uppercase ">{message}</h2>
    </div>
  );
}

export default Empty;
