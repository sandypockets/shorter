import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout>
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-green-600 font-semibold tracking-wide uppercase">
              Get to know Shorter
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              We're big fans of the internet, and share links with family, friends, and clients constantly.
            </p>
            <div className="mt-5 prose prose-green text-gray-500">
              <p>
                But these days, as browsers are responsible for transporting more and more information back and forth, links are getting longer and longer.
              </p>
              <p>
                And that's a problem. We rely on mobile devices to send much of our data. Tiny screens that are easily overwhelmed.
              </p>
              <p>
                That's where Shorter comes in. We were fed with links that covered the screen. So, we fixed it. And made it available to the world.
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The <em>real</em> story
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                Shorter is a demo app. A passion project, built just for fun.
              </p>
              <p>
                With that in mind, you can use Shorter as you'd like, but please understand that this is not a production app, and should not be used for actual business purposes.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
              <div className="h-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
