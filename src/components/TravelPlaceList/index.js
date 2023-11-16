import {ListItem, Image, HeadingText, DescriptionText} from './styledComponents'

const TravelPlaceList = props => {
  const {travelCardDetails} = props
  const {imageUrl, description, name} = travelCardDetails

  return (
    <ListItem>
      <Image src={imageUrl} alt={name} />
      <HeadingText>{name}</HeadingText>
      <DescriptionText>{description}</DescriptionText>
    </ListItem>
  )
}

export default TravelPlaceList
