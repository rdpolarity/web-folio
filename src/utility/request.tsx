import { request as graphqlRequest, Variables, RequestDocument } from "graphql-request"
import { TypedDocumentNode } from "@graphql-typed-document-node/core"
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>(process.env.NEXT_PUBLIC_ENDPOINT ?? '', document, variables, {
    Authorization: process.env.API_ACCESS_TOKEN ?? '',
  })
}
