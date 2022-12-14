export default function Container(props) {
  const { children } = props;

  return (
    <div className="text-white p-10 mt-auto align-bottom absolute bottom-0 max-h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-13rem)] overflow-auto lg:text-right">
      {children}
    </div>
  )
}