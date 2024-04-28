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
}