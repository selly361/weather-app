import { ErrorIcon, RetryIcon } from '../../assets/icons'

function ApiError() {
  return (
    <section
      className='w-max flex flex-col items-center justify-center text-center gap-6 py-16 px-4'
      aria-labelledby='api-error-title'
    >
      <ErrorIcon className='w-10 h-10 text-fg-muted' />

      <div className='space-y-2'>
        <h1 id='api-error-title' className='text-heading-md md:text-heading-page'>
          Something went wrong
        </h1>

        <p className='text-heading-s text-fg-muted max-w-xl mx-auto'>
          We couldn't connect to the server (API error). Please try again in a few
          moments.
        </p>
      </div>

      <button
        type='button'
        className='mt-2 inline-flex items-center gap-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 px-6 py-3 text-body-sm cursor-pointer transition-colors ease-in duration-300'
      >
        <RetryIcon className='w-4 h-4' />
        Retry
      </button>
    </section>
  )
}

export default ApiError
