import React, { FC } from 'react'

const PageNotFound: FC = () => {
    return (
        <><div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    404
                </h1>
                <h2 className="mt-6 text-center text-2xl text-gray-900">Page not Found</h2>
            </div>
        </div>
        </>
    )
}


export default PageNotFound;
