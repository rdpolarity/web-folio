
const Container = ({children} : any) => {
  return <div className="flex justify-center px-4">
    <div className="max-w-[1000px]">
      {children}
    </div>
  </div>
}

export default Container;