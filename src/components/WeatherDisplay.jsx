import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function WeatherDisplay({ data }) {
    if (!data) {
        return;
    }

    const { name, coord, main, weather } = data;
    const { lat, lon } = coord;
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const { description, icon } = weather[0];
    
    return (
        <>        
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-6 sm:px-6">
                    <h3 className="text-base/7 font-semibold text-gray-900">Weather Information</h3>
                    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">An overview of the current conditions.</p>
                    <div style={{ width: '100%', height: '400px' }}>
                        <APIProvider apiKey={import.meta.env.VITE_GOOGLEMAPS_API_KEY}>
                            <Map
                                style={{ width: '100%', height: '100%' }}
                                defaultCenter={{ lat: 0, lng: 0 }}
                                center={{ lat: lat, lng: lon }}
                                defaultZoom={12}
                                gestureHandling={'greedy'}
                                disableDefaultUI={true}
                            />
                        </APIProvider>
                    </div>
                </div>
                <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Place</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Description</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Temperature</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{temp}°C</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Feels Like</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{feels_like}°C</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Minimum Temperature</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{temp_min}°C</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Maximum Temperature</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{temp_max}°C</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Humidity</dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{humidity}%</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
}
