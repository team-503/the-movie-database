export class TMDBDiscoverMovieRequest {
    include_adult?: boolean
    include_video?: boolean
    language?: string
    page?: number
    primary_release_year?: number
    primary_release_date?: {
        gte?: string
        lte?: string
    }
    region?: string
    release_date?: {
        gte?: string
        lte?: string
    }
    sort_by?: string
    vote_average?: {
        gte?: number
        lte?: number
    }
    vote_count?: {
        gte?: number
        lte?: number
    }
    watch_region?: string
    with_cast?: string
    with_companies?: string
    with_crew?: string
    with_genres?: string
    with_keywords?: string
    with_origin_country?: string
    with_original_language?: string
    with_people?: string
    with_release_type?: number
    with_runtime?: {
        gte?: number
        lte?: number
    }
    with_watch_monetization_types?: string
    with_watch_providers?: string
    without_companies?: string
    without_genres?: string
    without_keywords?: string
    without_watch_providers?: string
    year?: number
}
