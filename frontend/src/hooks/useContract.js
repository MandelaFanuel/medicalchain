// frontend/src/hooks/useContract.js
import { useMemo } from 'react';
import { ethers } from 'ethers';
import { CONFIG } from '@/config/env.js';

export default function useContract(signer) {
    return useMemo(() => {
        return new ethers.Contract(
            CONFIG.CONTRACT_ADDRESS,
            CONFIG.CONTRACT_ABI,
            signer
        );
    }, [signer]);   
}