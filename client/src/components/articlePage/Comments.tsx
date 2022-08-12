import { MongoMessage } from "../../utils/types"
import Comment from "./Comment"

interface Props {
  messages: MongoMessage[]
  replies: any
  indentation?: boolean
}

export default function Comments({ messages, indentation, replies }: Props) {
  return (
    <div
      className={`${
        indentation &&
        "ml-12 relative before:content-[''] before:absolute before:top-0 before:-left-4 before:min-h-full before:w-1.5 before:bg-gray-200 before:rounded-lg"
      }`}
    >
      {messages.map((m) => (
        <Comment key={m._id} comment={m} replies={replies} />
      ))}
    </div>
  )
}
