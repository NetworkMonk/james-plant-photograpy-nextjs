export default function Container(props) {
  const { children } = props;

  return (
    <div className="text-white p-10 mt-auto align-top absolute bottom-0 right-0 h-[calc(100vh-8rem)] lg:h-[calc(100vh-13rem)] max-h-[calc(100vh-8rem)] max-lg:h-[calc(100vh-13rem)] overflow-auto lg:text-right">
      {children}
    </div>
  )
}