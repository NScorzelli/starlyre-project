export const badRequest = (error: Error): any => ({
  status: 400,
  body: error.message
})

export const notFound = (error: Error): any => ({
  statusCode: 404,
  body: error.message
})

export const ok = (data: any): any => (
  {
    statusCode: 200,
    body: data.message ? data.message : data
  }
)

export const noContent = (): any => ({
  statusCode: 204,
  body: 'No Content'
})
