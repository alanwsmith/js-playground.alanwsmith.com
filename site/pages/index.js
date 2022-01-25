import HeadTag from '../components/HeadTag'

export default function Home() {
  return (
    <>
      <HeadTag
        description="A place for me to mess around with JavaScript to get a better understanding of how it works."
        image="https://res.cloudinary.com/awsimages/image/upload/og-images/js-playground-home.png"
        title="The JS Playground Of Alan"
        type="website"
        url="https://js-playground.alanwsmith.com"
      />
      <h2>The JS Playground Of Alan</h2>
      <p>
        This is a place for me to mess around with javascript to get a better
        understanding of how it works
      </p>
    </>
  )
}