import {gql} from '@apollo/client'
const GET_ACTIVE_ITEM = gql`
    {
        activeItems(first: 5) {
            id
            price
            tokenId
            buyer
            seller
            nftAddress
        }
    }
    `

export default GET_ACTIVE_ITEM