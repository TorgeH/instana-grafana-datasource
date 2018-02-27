export default class InstanaDatasource {
    private backendSrv;
    private templateSrv;
    private $q;
    id: number;
    name: string;
    url: string;
    apiToken: string;
    currentTime: () => number;
    cacheSnapshotData: Object;
    lastFetchedFromAPI: boolean;
    MAX_NUMBER_OF_METRICS_FOR_CHARTS: number;
    CACHE_MAX_AGE: number;
    rollupDurationThresholds: {
        availableFor: number;
        rollup: number;
        label: string;
    }[];
    /** @ngInject */
    constructor(instanceSettings: any, backendSrv: any, templateSrv: any, $q: any);
    registerCacheSnapshotDataCallback(id: any, callback: any): void;
    request(method: any, url: any, requestId?: any): any;
    query(options: any): any;
    fetchSnapshotsForTarget(target: any, from: any, to: any): any;
    buildQuery(target: any): string;
    getHostSuffix(contexts: any, snapshotId: any): string;
    fetchMetricsForSnapshot(snapshotId: any, metric: any, from: any, to: any): any;
    annotationQuery(options: any): void;
    metricFindQuery(query: string): void;
    testDatasource(): any;
    getDefaultMetricRollupDuration(from: any, to: any, minRollup?: number): {
        availableFor: number;
        rollup: number;
        label: string;
    };
}