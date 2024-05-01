interface DiskData {
    timestamp: string;
    read: number;
    sent: number;
}

interface NetworkData {
    timestamp: string;
    recieved: number;
    sent: number;
}

interface RamData {
    timestamp: string;
    total: number;
    used: number;
}

interface CpuData {
    timestamp: string;
    usage: number;
}

interface BannerProps {
    loggedIn: boolean;
    toggleDrawer: any;
}

interface SystemInfo {
    system: string;
    node: string;
    release: string;
    version: string;
    machine: string;
    processor: string;
    physical_cores: number;
    logical_cores: number;
    cpu_freq: number;
    total_memory: number;
    total_disk_size: number;
}

