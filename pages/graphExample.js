import {useQuery,gql} from '@apollo/client'
const GET_ACTIVE_ITEM = gql`
    {
        activeItems(first: 5, where: { buyer: null }) {
            id
            price
            tokenId
            buyer
            seller
            nftAddress
        }
    }
`
const GraphExample = () => {
    const {loading,error,data}=useQuery(GET_ACTIVE_ITEM)
    console.log(data)
  return (
    <div>graphExample</div>
  )
}

export default GraphExample