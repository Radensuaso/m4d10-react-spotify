const fetchGet = async (url, setTheState) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjY0Mzk4MTksImV4cCI6MTYyNzY0OTQxOX0.r_G81mw3I9g934aGyIO8AZbfkWxO_W7hS9Tlz9lYZNY",
      },
    })
    if (response.ok) {
      const fetchedContent = await response.json()
      setTheState({ songs: fetchedContent.data, update: false })
    } else {
      console.log("There was an error")
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchGet
