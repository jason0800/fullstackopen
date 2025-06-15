const Error = ({error}) => {
  if (error === null) {
    return null
  }

  return <p className="error">Country Not Found</p>
}

export default Error
