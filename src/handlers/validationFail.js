export default async (c, req, res) => {
  let messages = []
  for(let error of c.validation.errors)
    messages.push(error.message)

  const error = messages.join(',')

  if(req.headers['x-openapi-validate'] === "enable")
    return res.status(400).json({ error, validation: c.validation.errors })

  res.status(400).json({ error })
}
