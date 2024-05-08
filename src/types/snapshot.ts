interface CpuData {
    average_cpu_load: number;
    since: string;
}

interface RamData {
    average_ram_usage: number;
    since: string;
}

interface DiskData {
    total_sent: number;
    total_read: number;
    since: string;
}

interface NetworkData {
    total_sent: number;
    total_received: number;
    since: string;
}

export interface Snapshot {
    cpu: CpuData;
    ram: RamData;
    disk: DiskData;
    network: NetworkData;
}